import { useState } from 'react';
import { ArrowRight, User, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RobuxCard from '@/components/RobuxCard';
import { Link } from 'react-router-dom';

const TopUp = () => {
  const [username, setUsername] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const robuxPackages = [
    { id: 1, amount: 400, price: 4.99, isBestSeller: false },
    { id: 2, amount: 800, price: 9.99, originalPrice: 10.99, isBestSeller: true },
    { id: 3, amount: 1700, price: 19.99, originalPrice: 21.99, bonus: 100, isRecommended: true },
    { id: 4, amount: 4500, price: 49.99, originalPrice: 54.99, bonus: 450 },
    { id: 5, amount: 10000, price: 99.99, originalPrice: 109.99, bonus: 1000 },
    { id: 6, amount: 22500, price: 199.99, originalPrice: 219.99, bonus: 2500 },
  ];

  const handlePackageSelect = (packageId: number) => {
    setSelectedPackage(packageId);
  };

  const selectedPkg = robuxPackages.find(pkg => pkg.id === selectedPackage);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Up Your Roblox Account</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your username and select a Robux package to get started
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Username Input */}
          <div className="lg:col-span-2">
            <Card className="mb-8 bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Roblox Username
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username">Enter your Roblox username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="YourRobloxUsername"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Make sure your username is correct. Robux will be delivered to this account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Package Selection */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Select Robux Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {robuxPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`cursor-pointer transition-all ${
                        selectedPackage === pkg.id 
                          ? 'ring-2 ring-primary ring-offset-2' 
                          : ''
                      }`}
                    >
                      <RobuxCard {...pkg} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gradient-card border border-primary/20">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Username</Label>
                  <p className="font-medium">{username || 'Not entered'}</p>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Selected Package</Label>
                  {selectedPkg ? (
                    <div className="space-y-2">
                      <p className="font-medium">{selectedPkg.amount.toLocaleString()} R$</p>
                      {selectedPkg.bonus && (
                        <p className="text-sm text-accent">
                          +{selectedPkg.bonus.toLocaleString()} Bonus R$
                        </p>
                      )}
                      <p className="text-lg font-bold text-primary">
                        ${selectedPkg.price.toFixed(2)}
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No package selected</p>
                  )}
                </div>

                <div className="pt-4 border-t">
                  <Link to="/payment">
                    <Button 
                      className="w-full"
                      variant="hero"
                      disabled={!username || !selectedPackage}
                    >
                      Proceed to Payment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  
                  {(!username || !selectedPackage) && (
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Please enter username and select a package
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;