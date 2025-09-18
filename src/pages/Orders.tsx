import { useState } from 'react';
import { Search, Clock, CheckCircle, XCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock order data
  const orders = [
    {
      id: 'TXN-2024-001234',
      username: 'PlayerExample123',
      amount: 1700,
      bonus: 100,
      price: 19.99,
      status: 'completed',
      date: '2024-01-15 14:30',
      paymentMethod: 'QRIS',
    },
    {
      id: 'TXN-2024-001235',
      username: 'GamerPro456',
      amount: 800,
      bonus: 0,
      price: 9.99,
      status: 'processing',
      date: '2024-01-15 13:15',
      paymentMethod: 'E-Wallet',
    },
    {
      id: 'TXN-2024-001236',
      username: 'RobloxFan789',
      amount: 4500,
      bonus: 450,
      price: 49.99,
      status: 'pending',
      date: '2024-01-15 12:00',
      paymentMethod: 'Bank Transfer',
    },
    {
      id: 'TXN-2024-001237',
      username: 'PlayerExample123',
      amount: 400,
      bonus: 0,
      price: 4.99,
      status: 'failed',
      date: '2024-01-14 16:45',
      paymentMethod: 'Credit Card',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" />;
      case 'processing':
        return <Clock className="w-5 h-5" />;
      case 'pending':
        return <Package className="w-5 h-5" />;
      case 'failed':
        return <XCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-accent text-accent-foreground">Completed</Badge>;
      case 'processing':
        return <Badge variant="secondary">Processing</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Order Tracking</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your Robux top-up orders and view transaction history
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8 bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Transaction ID or Username</Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Enter transaction ID or username..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button variant="hero">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <Card key={order.id} className="hover-lift bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <div className={`p-1 rounded-full mr-3 ${
                          order.status === 'completed' ? 'text-accent' :
                          order.status === 'processing' ? 'text-primary' :
                          order.status === 'pending' ? 'text-muted-foreground' :
                          'text-destructive'
                        }`}>
                          {getStatusIcon(order.status)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.date}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Username</p>
                          <p className="font-medium">{order.username}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Amount</p>
                          <p className="font-medium">
                            {order.amount.toLocaleString()} R$
                            {order.bonus > 0 && (
                              <span className="text-accent text-xs ml-1">
                                +{order.bonus}
                              </span>
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Payment</p>
                          <p className="font-medium">{order.paymentMethod}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total</p>
                          <p className="font-medium text-primary">
                            ${order.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {getStatusBadge(order.status)}
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12 bg-gradient-card">
              <CardContent>
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Orders Found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery 
                    ? "No orders match your search criteria." 
                    : "You haven't made any orders yet."
                  }
                </p>
                <Button variant="hero">
                  Start Shopping
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Status Legend */}
        <Card className="mt-8 bg-gradient-card">
          <CardHeader>
            <CardTitle>Order Status Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Pending</p>
                  <p className="text-xs text-muted-foreground">Payment processing</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <p className="font-medium">Processing</p>
                  <p className="text-xs text-muted-foreground">Delivering Robux</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium">Completed</p>
                  <p className="text-xs text-muted-foreground">Robux delivered</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <XCircle className="w-4 h-4 text-destructive" />
                <div>
                  <p className="font-medium">Failed</p>
                  <p className="text-xs text-muted-foreground">Payment failed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Orders;