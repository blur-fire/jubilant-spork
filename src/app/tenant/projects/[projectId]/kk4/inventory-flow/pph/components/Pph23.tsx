'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, Search, Filter, MoreHorizontal } from 'lucide-react';
import pph23Data from '../data/pph23-data.json';

export default function Pph23() {
  const { summary, transactions } = pph23Data;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-slate-200 bg-blue-50">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-600">
              {summary.description}
            </p>
            <p className="mt-3 text-3xl font-bold text-blue-600">
              {summary.totalTransactions}
            </p>
            <p className="mt-1 text-xs text-slate-500">{summary.description}</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-600">Total DPP (GL)</p>
            <p className="mt-3 text-2xl font-bold text-slate-900">
              {summary.totalDppGl}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {summary.dppDescription}
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-amber-50">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-600">
              Total PPh Amount
            </p>
            <p className="mt-3 text-2xl font-bold text-amber-600">
              {summary.totalPphAmount}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {summary.pphDescription}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Card */}
      <Card className="border-slate-200">
        <CardContent className="pt-6">
          {/* Header */}
          <div className="mb-6 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              PPh 23 Transactions (Jasa)
            </h2>
            <p className="text-sm text-slate-600">
              Service purchases subject to 2% withholding
            </p>
          </div>

          {/* Controls Bar */}
          <div className="mb-6 flex items-center gap-3 rounded-lg bg-slate-100 p-3">
            <Select defaultValue="20">
              <SelectTrigger className="w-20 border border-slate-300 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-700" />
              <Input
                placeholder="Cari nama user"
                className="border border-slate-300 bg-white pl-10 text-sm"
              />
            </div>

            <Select defaultValue="all-status">
              <SelectTrigger className="w-32 border border-slate-300 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="matched">Matched</SelectItem>
                <SelectItem value="variance">Variance</SelectItem>
                <SelectItem value="missing">Missing</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-type">
              <SelectTrigger className="w-32 border border-slate-300 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-type">All Type</SelectItem>
                <SelectItem value="jasa">Jasa</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="icon"
              className="border border-slate-300 bg-white"
            >
              <Filter className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="border border-slate-300 bg-slate-100"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-slate-600">
                    Invoice No.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-slate-600">
                    Supplier
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-slate-600">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-slate-600">
                    DPP (GL)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-slate-600">
                    DPP (SPT)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-slate-600">
                    Variance
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-slate-600">
                    PPh Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-slate-600">
                    Bukti Potong
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-slate-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className={`border-b border-slate-200 ${
                      transaction.status === 'Variance'
                        ? 'bg-amber-50/50'
                        : transaction.status === 'Missing'
                          ? 'bg-red-50/30'
                          : ''
                    } hover:bg-slate-50/50 transition-colors`}
                  >
                    <td className="px-4 py-3">
                      <div className="space-y-1">
                        <p className="font-mono text-slate-900">
                          {transaction.invoiceNo}
                        </p>
                        <p className="text-xs text-slate-500">{transaction.date}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="space-y-1">
                        <p className="text-slate-900">{transaction.supplier}</p>
                        <p className="font-mono text-xs text-slate-500">
                          {transaction.npwp}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className="border-slate-200 bg-white text-slate-900"
                      >
                        {transaction.category}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-900">
                      {transaction.dppGl}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-900">
                      {transaction.dppSpt}
                    </td>
                    <td
                      className="px-4 py-3 text-right font-mono font-semibold"
                      style={{ color: transaction.varianceColor }}
                    >
                      {transaction.variance}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-900">
                      {transaction.pphAmount}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-900">
                      {transaction.buktiPotong}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        style={{
                          backgroundColor: transaction.statusColor,
                          borderColor: transaction.statusBorder,
                          color: '#1A1A2E',
                        }}
                        className="text-xs font-medium"
                      >
                        {transaction.statusIcon} {transaction.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4 text-slate-900" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Info */}
          <div className="mt-4 text-xs text-slate-500">
            Showing {transactions.length} of {transactions.length} transactions
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
