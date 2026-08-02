import GuestbookSection from "../../components/GuestbookSection";

export const metadata = { title: "留言板 · 覃杰简历" };

export default function GuestbookPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">留言板</h1>
      <p className="text-sm text-slate-500 mb-8">给我留个言吧，我会看到的（数据存在本站数据库里）。</p>
      <GuestbookSection />
    </div>
  );
}
