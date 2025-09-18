import { MessageCircle, Phone, Mail, Clock, HelpCircle, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  const faqs = [
    {
      question: "How long does it take to receive my Robux?",
      answer: "Most Robux deliveries are instant! After successful payment confirmation, your Robux will be added to your account within 1-5 minutes. In rare cases, it may take up to 30 minutes during high traffic periods."
    },
    {
      question: "Is it safe to buy Robux from your website?",
      answer: "Yes, absolutely! We use bank-level SSL encryption for all transactions and only work with official Roblox APIs. Your account information and payment details are fully secure. We've processed over 1 million successful transactions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept QRIS, major e-wallets (GoPay, OVO, DANA, ShopeePay), bank transfers from major Indonesian banks, and international credit cards (Visa, Mastercard, JCB)."
    },
    {
      question: "Can I get a refund if something goes wrong?",
      answer: "Yes, we offer full refunds for failed deliveries. If your Robux doesn't arrive within 24 hours or if there's a payment issue, contact our support team and we'll process your refund immediately."
    },
    {
      question: "Do I need to provide my Roblox password?",
      answer: "No, never! We only need your Roblox username. Never share your password with anyone. Our system delivers Robux using official Roblox methods that don't require your password."
    },
    {
      question: "Why are your prices different from the official Roblox store?",
      answer: "We offer competitive regional pricing and frequent promotions with bonus Robux. Our prices may vary based on payment method and current exchange rates, but we always strive to provide the best value."
    },
    {
      question: "Can I buy Robux for someone else?",
      answer: "Yes! Just enter their Roblox username during checkout. Make sure the username is spelled correctly, as we cannot transfer Robux between accounts once delivered."
    },
    {
      question: "What if I entered the wrong username?",
      answer: "Contact our support team immediately before the delivery is processed. We can update the username if the order hasn't been completed yet. Once delivered, we cannot transfer Robux to a different account."
    }
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      available: '24/7 Available',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us your questions anytime',
      action: 'support@robloxtop.com',
      available: 'Response within 2 hours',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      action: '+62 21 1234 5678',
      available: 'Mon-Sun 8AM-11PM WIB',
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Delivery',
      description: 'Get your Robux in 1-5 minutes after payment',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Safe',
      description: 'Bank-level security and official Roblox integration',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service available',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover-lift bg-gradient-card">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <Button variant="hero" className="mb-2">
                  {method.action}
                </Button>
                <p className="text-sm text-accent">{method.available}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card mb-6">
              <CardHeader>
                <CardTitle>Why Choose RobloxTop?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for? Our support team is here to help 24/7.
                </p>
                <Button className="w-full" variant="hero">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;