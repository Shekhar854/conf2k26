
"use client"
import React,{ useState } from "react";
import { Card } from "./ui/card";
import { Button } from "@/app/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Download, ChevronDown, ArrowRight } from "lucide-react";

const ConferenceGuidelines = () => {
  const [isPaperGuidelinesOpen, setIsPaperGuidelinesOpen] = useState(true);
  const [isGeneralInstructionsOpen, setIsGeneralInstructionsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-2">
            Conference Guidelines
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-4 relative inline-block">
            Author's Guidelines
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Authors are invited to submit original, high-quality, and previously unpublished research articles. 
            Submissions must not be under review by any other publication or conference. All manuscripts should 
            be submitted electronically via Microsoft CMT in strict adherence to the IEEE standard two-column 
            conference template, which can be accessed through the provided link. Each manuscript is limited to 
            a maximum of six (6) pages, including figures, tables, and references. Additional pages may be 
            accommodated with a nominal fee.
          </p>
        </div>

        {/* Guidelines Sections */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Paper Formatting Guidelines */}
          <Collapsible 
            open={isPaperGuidelinesOpen} 
            onOpenChange={setIsPaperGuidelinesOpen}
          >
            <Card className="bg-primary text-primary-foreground overflow-hidden shadow-lg">
              <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:opacity-90 transition-opacity">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-foreground"></span>
                  Paper Formatting Guidelines
                </h2>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform ${isPaperGuidelinesOpen ? 'rotate-180' : ''}`} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-6 pb-6 space-y-3">
                  <ol className="list-decimal list-inside space-y-3">
                    <li>Paper Size: US Letter (8.5" × 11").</li>
                    <li>
                      Paper Length: Maximum of 6 pages, including figures, tables, and references. Two additional 
                      pages are permitted with a charge of ₹1000 per page (Indian authors) or $50 per page (international authors).
                    </li>
                    <li>Formatting: Double-column layout, single-spaced, using 10pt Times New Roman font.</li>
                    <li>
                      Margins: Top: 1" (25 mm) on the title page; 0.75" (19 mm) elsewhere. Left, Right, and Bottom 
                      margins: 0.75" (19 mm).
                    </li>
                    <li>File Format: PDF, with a maximum size of 5MB. All fonts must be embedded.</li>
                    <li>No page numbering should be included in the manuscript.</li>
                    <li>Use the IEEE MS Word template provided via the link above for proper formatting.</li>
                  </ol>
                  
                  <Button 
                    variant="secondary" 
                    className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Template
                  </Button>
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* General Instructions */}
          <Collapsible 
            open={isGeneralInstructionsOpen} 
            onOpenChange={setIsGeneralInstructionsOpen}
          >
            <Card className="bg-card shadow-lg">
              <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  General Instructions
                </h2>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform text-foreground ${isGeneralInstructionsOpen ? 'rotate-180' : ''}`} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-6 pb-6">
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li>Papers violating formatting guidelines may be rejected.</li>
                    <li>Submissions must be original, unpublished work not under review elsewhere.</li>
                    <li>Simultaneous submissions to other conferences or journals are prohibited.</li>
                    <li>All manuscripts must be written in English and prepared as a PDF file.</li>
                    <li>Papers should strictly adhere to the IEEE two-column format with 10pt font size.</li>
                    <li>The page limit is six (6) pages. An additional two pages will be allowed with extra charges as specified.</li>
                    <li>All figures, tables, and references must fit within the page limit.</li>
                    <li>Papers will be reviewed based on originality, significance, technical quality, and clarity.</li>
                    <li>The decision to accept or reject a paper rests with the Technical Program Committee.</li>
                    <li>Accepted papers must address reviewers' comments and meet final submission requirements.</li>
                    <li>The Conference Chair reserves the right to exclude papers not presented or meeting guidelines from the proceedings.</li>
                    <li>All submissions should be made via Microsoft CMT.</li>
                  </ol>
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>

        {/* IEEE Policy Cards */}
        <div className="space-y-4 mb-8">
          <Card className="bg-card shadow-lg">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  IEEE
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">IEEE Similarity and Plagiarism Policies</h3>
                  <p className="text-sm text-primary">Guidelines for Maintaining Academic Integrity</p>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
                Redirect to Link
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          <Card className="bg-card shadow-lg">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  IEEE
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">IEEE E-Copyright Process Document</h3>
                  <p className="text-sm text-primary">Final Submission with IEEE Xplore®-Compatible PDFs</p>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
                Redirect to Link
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Bottom Info Banner */}
        <Card className="bg-primary text-primary-foreground shadow-lg">
          <div className="p-6">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Papers of acceptable quality presented at the conference will be submitted to IEEE Xplore for potential inclusion.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Accepted papers must be presented by at least one author. Authors must complete paid registration to upload the final IEEE-compliant version of their paper.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Failure to register or present the paper will result in removal from the conference program and proceedings.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No refunds will be provided for cancellations, but substitutions are allowed before the event.</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConferenceGuidelines;
