import React, { createContext, useEffect, useState } from "react";
import { fetchPodcasts } from "../api/Fetchdata";

export const PodcastContext = createContext();

export const SORT_OPTIONS = [
  { key: "default", label: "Default" },
  { key: "date-desc", label: "Newest" },
  { key: "date-asc", label: "Oldest" },
  { key: "title-asc", label: "Title A → Z" },
  { key: "title-desc", label: "Title Z → A" },
];

export function PodcastProvider({ children }) {
  // --- Core data ---
  const [allPodcasts, setAllPodcasts] = useState([
    // fallback dummy podcast to prevent blank page
    { id: 1, title: "Test Podcast", updated: new Date().toISOString(), genres: [1] },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Filters and controls ---
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("date-desc");
  const [genre, setGenre] = useState("all");

  // --- Pagination ---
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // --- Fetch podcasts from API ---
  useEffect(() => {
    setLoading(true);
    fetchPodcasts(setAllPodcasts, setError, setLoading);
  }, []);

  // --- Reset page when filters change ---
  useEffect(() => {
    setPage(1);
  }, [search, sortKey, genre]);

  // --- Adjust page size based on screen width ---
  useEffect(() => {
    const calculatePageSize = () => {
      const screenW = window.innerWidth;
      if (screenW <= 1024) {
        setPageSize(10);
        return;
      }
      const cardWidth = 260;
      const maxRows = 2;
      const columns = Math.floor(screenW / cardWidth);
      setPageSize(columns * maxRows);
    };
    calculatePageSize();
    window.addEventListener("resize", calculatePageSize);
    return () => window.removeEventListener("resize", calculatePageSize);
  }, []);

  // --- Safe filtering & sorting ---
  const applyFilters = () => {
    let data = Array.isArray(allPodcasts) ? [...allPodcasts] : [];

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((p) => p.title && p.title.toLowerCase().includes(q));
    }

    // Genre filter
    if (genre !== "all") {
      data = data.filter(
        (p) => Array.isArray(p.genres) && p.genres.includes(Number(genre))
      );
    }

    // Sorting
    switch (sortKey) {
      case "title-asc":
        data.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        break;
      case "title-desc":
        data.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
        break;
      case "date-asc":
        data.sort((a, b) => new Date(a.updated || 0) - new Date(b.updated || 0));
        break;
      case "date-desc":
        data.sort((a, b) => new Date(b.updated || 0) - new Date(a.updated || 0));
        break;
      default:
        break;
    }

    return data;
  };

  // --- Derived data ---
  const filtered = applyFilters();
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // --- Value exposed to context ---
  const value = {
    loading,
    error,
    search,
    setSearch,
    sortKey,
    setSortKey,
    genre,
    setGenre,
    page: currentPage,
    setPage,
    totalPages,
    podcasts: paged,
    allPodcastsCount: filtered.length,
    allPodcasts, // raw dataset
  };

  // --- Correctly inside the function ---
  return <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>;
}