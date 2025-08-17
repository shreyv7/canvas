import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 font-light">Page not found</p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm font-light tracking-wide"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
