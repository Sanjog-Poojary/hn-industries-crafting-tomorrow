import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModal } from "@/hooks/use-modal";
import { useToast } from "@/hooks/use-toast";

export default function EnquiryModal() {
  const { isEnquiryOpen, setEnquiryOpen } = useModal();
  const { toast } = useToast();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email) {
      toast({
        title: "Please fill name and email",
        description: "Required fields",
      });
      return;
    }

    // TODO: wire to backend API
    toast({
      title: "Enquiry sent",
      description: "We will contact you shortly",
    });
    setEnquiryOpen(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Dialog open={isEnquiryOpen} onOpenChange={setEnquiryOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enquire Now</DialogTitle>
          <DialogDescription>
            Send your requirements and contact details.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="grid gap-4">
          <Input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <DialogFooter>
            <Button type="submit" variant="accent">
              Send Enquiry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
