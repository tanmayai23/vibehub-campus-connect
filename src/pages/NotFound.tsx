
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-vibe-background-primary dark:bg-vibe-dark-background-primary p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <div className="text-9xl font-display font-bold text-vibe-accent-blue dark:text-vibe-dark-accent">404</div>
          <h1 className="text-2xl font-medium mt-4 mb-2">Page Not Found</h1>
          <p className="text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Button asChild className="bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
