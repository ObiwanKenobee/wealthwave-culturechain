import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet as WalletIcon, Send, Download, CreditCard, History, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const Wallet = () => {
  const wallets = [
    {
      type: "Fiat",
      balance: 25000,
      currency: "USD",
      change: 2.5,
    },
    {
      type: "Crypto",
      balance: 15000,
      currency: "BTC",
      change: -1.8,
    },
    {
      type: "Tokenized Assets",
      balance: 75000,
      currency: "USD",
      change: 5.2,
    },
  ];

  const transactions = [
    {
      type: "received",
      amount: 5000,
      currency: "USD",
      from: "Bank Transfer",
      date: "2024-03-10",
    },
    {
      type: "sent",
      amount: 2500,
      currency: "USD",
      to: "Investment Fund",
      date: "2024-03-09",
    },
    {
      type: "received",
      amount: 1000,
      currency: "USD",
      from: "Asset Dividend",
      date: "2024-03-08",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Wallet</h1>
              <div className="space-x-2">
                <Button variant="outline">
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Receive
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wallets.map((wallet, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{wallet.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">
                        {wallet.currency} {wallet.balance.toLocaleString()}
                      </p>
                      <p className={`text-sm flex items-center ${
                        wallet.change >= 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {wallet.change >= 0 ? "+" : ""}{wallet.change}%
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.map((transaction, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex items-center">
                            {transaction.type === "received" ? (
                              <ArrowDownLeft className="mr-3 h-5 w-5 text-green-500" />
                            ) : (
                              <ArrowUpRight className="mr-3 h-5 w-5 text-red-500" />
                            )}
                            <div>
                              <p className="font-medium">
                                {transaction.type === "received" ? "Received from" : "Sent to"}{" "}
                                {transaction.type === "received" ? transaction.from : transaction.to}
                              </p>
                              <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${
                              transaction.type === "received" ? "text-green-600" : "text-red-600"
                            }`}>
                              {transaction.type === "received" ? "+" : "-"}
                              {transaction.currency} {transaction.amount.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Link Bank Account
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <WalletIcon className="mr-2 h-4 w-4" />
                      Connect Crypto Wallet
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <History className="mr-2 h-4 w-4" />
                      View All Transactions
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wallet;