"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/Sidebar";

// Interface định nghĩa kiểu dữ liệu cho 1 giao dịch
interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: "income" | "expense"; // income = cộng tiền (+), expense = trừ tiền (-)
  category?: string;
}

export default function AccountHistoryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Danh sách giao dịch seeding sẵn
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      title: "Payment salary - CTY TNHH Phat trien phan mem - Thanh toan luong thang 9",
      date: "",
      amount: 40032218,
      type: "income",
      category: "Salary",
    },
    {
      id: "2",
      title: "Tien an",
      date: "",
      amount: 7000000,
      type: "expense",
      category: "An",
    },
    {
      id: "3",
      title: "Payment salary - CTY TNHH Phat trien phan mem - Thanh toan luong thang 8",
      date: "",
      amount: 40032218,
      type: "income",
      category: "Salary",
    },
    {
      id: "4",
      title: "Tien an",
      date: "",
      amount: 14000000,
      type: "expense",
      category: "An",
    },
    {
      id: "5",
      title: "Payment salary - CTY TNHH Phat trien phan mem - Thanh toan luong thang 7",
      date: "",
      amount: 40032218,
      type: "income",
      category: "Salary",
    },
  ]);

  // Form State để tạo giao dịch mới
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newType, setNewType] = useState<"income" | "expense">("expense");
  const [newCategory, setNewCategory] = useState("Khác");

  // Tính tổng số dư tài khoản dựa trên các giao dịch
  const currentBalance = 381875616;

  // Xử lý thêm giao dịch mới
  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAmount || isNaN(Number(newAmount))) return;

    const newTx: Transaction = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      date: "Vừa xong",
      amount: parseFloat(newAmount),
      type: newType,
      category: newCategory,
    };

    setTransactions([newTx, ...transactions]);

    // Reset Form & đóng modal
    setNewTitle("");
    setNewAmount("");
    setNewType("expense");
    setNewCategory("Khác");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-800 font-sans pb-20 relative overflow-x-hidden">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Top Header Bar */}
      <header className="bg-[#0099e6] text-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Menu"
            className="p-1 focus:outline-none cursor-pointer"
          >
            <div className="w-6 h-[2px] bg-white mb-1.5"></div>
            <div className="w-6 h-[2px] bg-white mb-1.5"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </button>
          <h1 className="text-base font-medium tracking-wide">
            History
          </h1>
        </div>
        <Link
          href="/home"
          className="text-xs bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded transition-colors"
        >
          Home
        </Link>
      </header>

      {/* Account Info Summary Card */}
      <div className="bg-gradient-to-r from-[#0099e6] to-[#00b4f0] text-white p-5 shadow-md">
        <div className="max-w-md mx-auto">
          <div className="text-xs text-sky-100 font-light mb-1">
            Payment account (358-****-882)
          </div>
          <div className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-baseline gap-2">
            <span>
              {currentBalance.toLocaleString("vi-VN", {
                minimumFractionDigits: 2,
              })}
            </span>
            <span className="text-xs font-normal bg-white/20 px-1.5 py-0.5 rounded">
              VND
            </span>
          </div>
        </div>
      </div>

      {/* Transactions List Container */}
      <main className="p-4 max-w-md mx-auto space-y-3">
        <div className="flex justify-between items-center text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 pt-2">
          <span>All transaction ({transactions.length})</span>
          <span>Sort: latest</span>
        </div>

        {/* List Items */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200/80 divide-y divide-gray-100 overflow-hidden">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="p-3.5 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="text-sm font-medium text-gray-800">
                  {tx.title}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <span>{tx.date}</span>
                  {tx.category && (
                    <>
                      <span>•</span>
                      <span className="bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded">
                        {tx.category}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Amount Display */}
              <div className="text-right">
                <div
                  className={`text-sm font-semibold ${
                    tx.type === "income" ? "text-[#00b4f0]" : "text-[#e15241]"
                  }`}
                >
                  {tx.type === "income" ? "+" : "-"}{" "}
                  {tx.amount.toLocaleString("vi-VN")}
                </div>
                <div className="text-[10px] text-gray-400 font-medium">VND</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Nút Dấu Cộng Floating Action Button (+) để Thêm Giao Dịch */}
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#00be51] hover:bg-[#00a345] active:scale-90 text-white rounded-full flex items-center justify-center shadow-xl z-30 transition-all cursor-pointer border-2 border-white"
        title="Thêm giao dịch mới"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* Modal Form Tạo Giao Dịch Mới */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl p-5 space-y-4 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-semibold text-gray-800">
                Thêm Giao Dịch Mới
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-light"
              >
                ✕
              </button>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleAddTransaction} className="space-y-3 text-sm">
              {/* Loại giao dịch */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Loại giao dịch
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setNewType("expense")}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                      newType === "expense"
                        ? "bg-[#e15241] text-white border-[#e15241]"
                        : "bg-gray-50 text-gray-600 border-gray-200"
                    }`}
                  >
                    - Trừ tiền (Tiêu dùng)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewType("income")}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                      newType === "income"
                        ? "bg-[#00b4f0] text-white border-[#00b4f0]"
                        : "bg-gray-50 text-gray-600 border-gray-200"
                    }`}
                  >
                    + Cộng tiền (Thu nhập)
                  </button>
                </div>
              </div>

              {/* Tên / Nội dung giao dịch */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Tên / Nội dung giao dịch
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Chuyển tiền ăn tối, Lương..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099e6]"
                />
              </div>

              {/* Số tiền */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Số tiền (VND)
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  placeholder="Ví dụ: 500000"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099e6]"
                />
              </div>

              {/* Danh mục */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Danh mục
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099e6] bg-white"
                >
                  <option value="Chuyển khoản">Chuyển khoản</option>
                  <option value="Mua sắm">Mua sắm</option>
                  <option value="Ăn uống">Ăn uống</option>
                  <option value="Hóa đơn & Dịch vụ">Hóa đơn & Dịch vụ</option>
                  <option value="Lương / Thu nhập">Lương / Thu nhập</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#00be51] hover:bg-[#00a345] text-white font-medium rounded-lg shadow-md transition-colors"
                >
                  Tạo giao dịch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}