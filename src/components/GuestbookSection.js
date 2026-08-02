"use client";

import { useCallback, useEffect, useState } from "react";

export default function GuestbookSection() {
  const [items, setItems] = useState([]);
  const [stats, setStats] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/guestbook");
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshStats = useCallback(() => {
    fetch("/api/visits")
      .then((r) => r.json())
      .then((d) => setStats(d))
      .catch(() => {});
  }, []);

  useEffect(() => {
    refresh();
    refreshStats();
  }, [refresh, refreshStats]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !message.trim()) {
      setError("请填写昵称和留言内容");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "提交失败，请重试");
        return;
      }
      setName("");
      setMessage("");
      await refresh();
      refreshStats();
    } catch {
      setError("网络错误，请稍后重试");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-8">
      {stats && (
        <div className="flex flex-wrap gap-5 text-sm text-slate-500">
          <span>总访问 <b className="text-indigo-600">{stats.totalVisits}</b> 次</span>
          <span>今日 <b className="text-indigo-600">{stats.todayVisits}</b> 次</span>
          <span>留言 <b className="text-indigo-600">{stats.guestbookCount}</b> 条</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
        <h2 className="font-semibold text-slate-800">写留言</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          placeholder="你的昵称"
          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={4}
          placeholder="想说的话……"
          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={sending}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
        >
          {sending ? "提交中…" : "提交留言"}
        </button>
      </form>

      <div>
        <h2 className="font-semibold text-slate-800 mb-3">全部留言（{items.length}）</h2>
        {loading ? (
          <p className="text-sm text-slate-400">加载中…</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-slate-400">还没有留言，来抢沙发～</p>
        ) : (
          <ul className="space-y-3">
            {items.map((it) => (
              <li key={it.id} className="bg-white border border-slate-200 rounded-2xl p-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium text-slate-700">{it.name}</span>
                  <span className="text-xs text-slate-400">{it.created_at}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2 whitespace-pre-wrap break-words">{it.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
