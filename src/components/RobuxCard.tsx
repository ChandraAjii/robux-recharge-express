import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import robuxIcon from '@/assets/robux-icon.jpg';

interface RobuxCardProps {
  amount: number;
  price: number;
  originalPrice?: number;
  isBestSeller?: boolean;
  isRecommended?: boolean;
  bonus?: number;
}

const RobuxCard = ({ 
  amount, 
  price, 
  originalPrice, 
  isBestSeller, 
  isRecommended,
  bonus 
}: RobuxCardProps) => {
  return (
    <Card className="relative hover-lift cursor-pointer bg-gradient-card border border-border/50">
      {/* Badges */}
      <div className="absolute -top-2 left-4 z-10 flex gap-2">
        {isBestSeller && (
          <Badge className="bg-accent text-accent-foreground">
            <Star className="w-3 h-3 mr-1" />
            Best Seller
          </Badge>
        )}
        {isRecommended && (
          <Badge variant="secondary">
            Recommended
          </Badge>
        )}
      </div>

      <CardHeader className="text-center pb-4 pt-6">
        <div className="flex items-center justify-center mb-3">
          <img 
            src={robuxIcon} 
            alt="Robux" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          {amount.toLocaleString()} R$
        </h3>
        {bonus && (
          <p className="text-sm text-accent font-medium">
            +{bonus.toLocaleString()} Bonus R$
          </p>
        )}
      </CardHeader>

      <CardContent className="text-center">
        <div className="mb-4">
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through mb-1">
              ${originalPrice.toFixed(2)}
            </p>
          )}
          <p className="text-3xl font-bold text-primary">
            ${price.toFixed(2)}
          </p>
          {originalPrice && (
            <p className="text-sm text-accent font-medium">
              Save ${(originalPrice - price).toFixed(2)}
            </p>
          )}
        </div>

        <Button className="w-full" variant="hero">
          Select Package
        </Button>
      </CardContent>
    </Card>
  );
};

export default RobuxCard;