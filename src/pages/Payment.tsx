import { useState } from 'react';
import { ArrowRight, CreditCard, Smartphone, Building, QrCode, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const paymentMethods = [
    {
      id: 'qris',
      name: 'QRIS',
      icon: <QrCode className="w-6 h-6" />,
      description: 'Scan QR code with any e-wallet',
      popular: true,
    },
    {
      id: 'ewallet',
      name: 'E-Wallet',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'GoPay, OVO, DANA, ShopeePay',
      popular: false,
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: <Building className="w-6 h-6" />,
      description: 'BCA, Mandiri, BNI, BRI',
      popular: false,
    },
    {
      id: 'credit',
      name: 'Credit Card',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Visa, Mastercard, JCB',
      popular: false,
    },
  ];

  const steps = [
    { number: 1, title: 'Top Up', completed: true },
    { number: 2, title: 'Payment', completed: false },
    { number: 3, title: 'Confirmation', completed: false },
  ];

  // Mock order data
  const orderData = {
    username: 'PlayerExample123',
    amount: 1700,
    bonus: 100,
    price: 19.99,
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 
                    ${step.completed || currentStep === step.number
                      ? 'bg-primary border-primary text-white' 
                      : 'border-muted-foreground text-muted-foreground'
                    }
                  `}>
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    step.completed || currentStep === step.number
                      ? 'text-foreground' 
                      : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    step.completed ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle>Select Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      className={`cursor-pointer transition-all hover-lift ${
                        selectedMethod === method.id
                          ? 'ring-2 ring-primary ring-offset-2 bg-primary/5'
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                              {method.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold">{method.name}</h3>
                              {method.popular && (
                                <Badge variant="secondary" className="mt-1">
                                  Most Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </CardContent>
                    </Card>
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
                  <p className="text-sm text-muted-foreground">Username</p>
                  <p className="font-medium">{orderData.username}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Robux Package</p>
                  <p className="font-medium">{orderData.amount.toLocaleString()} R$</p>
                  {orderData.bonus && (
                    <p className="text-sm text-accent">
                      +{orderData.bonus.toLocaleString()} Bonus R$
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Payment Method</p>
                  <p className="font-medium">
                    {selectedMethod 
                      ? paymentMethods.find(m => m.id === selectedMethod)?.name 
                      : 'Not selected'
                    }
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ${orderData.price.toFixed(2)}
                    </span>
                  </div>

                  <Button 
                    className="w-full"
                    variant="hero"
                    disabled={!selectedMethod}
                  >
                    Complete Payment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  {!selectedMethod && (
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Please select a payment method
                    </p>
                  )}
                </div>

                <div className="text-xs text-muted-foreground space-y-1">
                  <p>🔒 Your payment is secured with SSL encryption</p>
                  <p>⚡ Instant delivery after payment confirmation</p>
                  <p>💬 24/7 customer support available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;