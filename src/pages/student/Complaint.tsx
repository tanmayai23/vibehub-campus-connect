
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Clock, FileText, CheckCircle2, XCircle } from "lucide-react";

const ComplaintPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2>(1);
  const [complaintData, setComplaintData] = useState({
    subject: "",
    category: "",
    description: "",
  });
  
  const handleInputChange = (field: string, value: string) => {
    setComplaintData({ ...complaintData, [field]: value });
  };
  
  const handleNextStep = () => {
    if (complaintData.subject && complaintData.category && complaintData.description) {
      setStep(2);
    } else {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all fields to proceed.",
        variant: "destructive",
      });
    }
  };
  
  const handleSubmit = () => {
    toast({
      title: "Complaint Submitted",
      description: "Your complaint has been submitted successfully. Reference: COMP-2025-0042",
    });
    
    // Reset form and go back to step 1
    setComplaintData({
      subject: "",
      category: "",
      description: "",
    });
    setStep(1);
  };
  
  const previousComplaints = [
    {
      id: "COMP-2025-0041",
      subject: "Water Cooler Not Working",
      date: "May 12, 2025",
      status: "resolved",
    },
    {
      id: "COMP-2025-0039",
      subject: "Wifi Connectivity Issues in Hostel Block C",
      date: "May 5, 2025",
      status: "in-progress",
    },
    {
      id: "COMP-2025-0036",
      subject: "Classroom Projector Malfunction",
      date: "April 28, 2025",
      status: "resolved",
    },
  ];

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="flex min-h-screen bg-vibe-background-primary dark:bg-vibe-dark-background-primary">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-display font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary mb-6 animate-fade-in">
                  Complaint Portal
                </h1>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <h2 className="text-lg font-medium mb-6 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                        File a New Complaint
                      </h2>
                      
                      <div className="mb-8 flex justify-between relative">
                        <div className="w-full absolute top-1/2 -translate-y-1/2 h-0.5 bg-vibe-background-tertiary dark:bg-vibe-dark-background-tertiary"></div>
                        
                        <div className="flex flex-col items-center relative z-10">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            step >= 1 
                              ? "bg-vibe-accent-blue dark:bg-vibe-dark-accent text-white" 
                              : "bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary text-vibe-text-secondary dark:text-vibe-dark-text-secondary"
                          }`}>
                            1
                          </div>
                          <span className="text-xs mt-1 text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Details</span>
                        </div>
                        
                        <div className="flex flex-col items-center relative z-10">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            step >= 2 
                              ? "bg-vibe-accent-blue dark:bg-vibe-dark-accent text-white" 
                              : "bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary text-vibe-text-secondary dark:text-vibe-dark-text-secondary"
                          }`}>
                            2
                          </div>
                          <span className="text-xs mt-1 text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Review & Submit</span>
                        </div>
                      </div>
                      
                      {step === 1 ? (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Subject</label>
                            <Input 
                              placeholder="Brief title for your complaint" 
                              value={complaintData.subject}
                              onChange={(e) => handleInputChange("subject", e.target.value)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Category</label>
                            <Select 
                              value={complaintData.category}
                              onValueChange={(value) => handleInputChange("category", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="academic">Academic Issues</SelectItem>
                                <SelectItem value="facility">Facility & Infrastructure</SelectItem>
                                <SelectItem value="hostel">Hostel & Accommodation</SelectItem>
                                <SelectItem value="technology">Technology & Equipment</SelectItem>
                                <SelectItem value="administrative">Administrative Services</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Description</label>
                            <Textarea 
                              placeholder="Provide details about your complaint" 
                              rows={5}
                              value={complaintData.description}
                              onChange={(e) => handleInputChange("description", e.target.value)}
                            />
                          </div>
                          
                          <Button 
                            onClick={handleNextStep}
                            className="mt-6 bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
                          >
                            Continue
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg p-4">
                            <h3 className="font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Review your complaint</h3>
                            
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Subject</p>
                                <p className="text-vibe-text-primary dark:text-vibe-dark-text-primary">{complaintData.subject}</p>
                              </div>
                              
                              <div>
                                <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Category</p>
                                <p className="text-vibe-text-primary dark:text-vibe-dark-text-primary capitalize">{complaintData.category}</p>
                              </div>
                              
                              <div>
                                <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Description</p>
                                <p className="text-vibe-text-primary dark:text-vibe-dark-text-primary whitespace-pre-wrap">{complaintData.description}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <Button 
                              variant="outline" 
                              onClick={() => setStep(1)}
                            >
                              Back
                            </Button>
                            <Button 
                              onClick={handleSubmit}
                              className="bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
                            >
                              Submit Complaint
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Your Complaints</h2>
                      
                      <div className="space-y-4">
                        {previousComplaints.map((complaint, index) => (
                          <div 
                            key={index}
                            className="border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg p-3"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium text-sm text-vibe-text-primary dark:text-vibe-dark-text-primary">{complaint.subject}</h3>
                              <div className={`px-2 py-0.5 text-xs rounded-full flex items-center ${
                                complaint.status === "resolved" 
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              }`}>
                                {complaint.status === "resolved" ? (
                                  <>
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    <span>Resolved</span>
                                  </>
                                ) : (
                                  <>
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>In Progress</span>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary items-center justify-between">
                              <div className="flex items-center">
                                <FileText className="h-3 w-3 mr-1" />
                                <span>{complaint.id}</span>
                              </div>
                              <span>{complaint.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-4"
                      >
                        View All Complaints
                      </Button>
                    </div>
                    
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in mt-6">
                      <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Need Help?</h2>
                      
                      <div className="space-y-2 text-vibe-text-secondary dark:text-vibe-dark-text-secondary text-sm">
                        <p>If you need immediate assistance, please contact:</p>
                        <p className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Student Support Services</p>
                        <p>Email: support@vibehub.edu</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Hours: Mon-Fri, 9AM-5PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default ComplaintPage;
