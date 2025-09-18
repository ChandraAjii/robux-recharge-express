import { ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import RobuxCard from '@/components/RobuxCard';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const robuxPackages = [
    { amount: 400, price: 4.99, isBestSeller: false },
    { amount: 800, price: 9.99, originalPrice: 10.99, isBestSeller: true },
    { amount: 1700, price: 19.99, originalPrice: 21.99, bonus: 100, isRecommended: true },
    { amount: 4500, price: 49.99, originalPrice: 54.99, bonus: 450 },
    { amount: 10000, price: 99.99, originalPrice: 109.99, bonus: 1000 },
    { amount: 22500, price: 199.99, originalPrice: 219.99, bonus: 2500 },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Delivery',
      description: 'Get your Robux delivered instantly to your account'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Payment',
      description: 'Multiple payment methods with bank-level security'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any issues'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Top Up Your <span className="text-primary">Roblox</span> Account
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get instant Robux delivery with secure payments and the best prices in the market
          </p>
          <Link to="/top-up">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Top Up Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-lift bg-gradient-card">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Robux Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Robux Package</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select from our range of Robux packages with instant delivery and secure payment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {robuxPackages.map((pkg, index) => (
              <RobuxCard key={index} {...pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/top-up">
              <Button variant="outline" size="lg">
                View All Packages
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;