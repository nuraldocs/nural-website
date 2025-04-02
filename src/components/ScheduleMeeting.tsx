
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const ScheduleMeeting = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);

  const handleSchedule = () => {
    if (!date || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select both a date and time for your meeting.",
        variant: "destructive",
      });
      return;
    }

    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      toast({
        title: "Meeting Scheduled",
        description: `Your meeting is scheduled for ${format(date, "MMMM d, yyyy")} at ${selectedTime}.`,
        duration: 5000,
      });
      
      // Reset selection
      setDate(undefined);
      setSelectedTime(null);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Select Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal border-gray-300",
                  !date && "text-gray-500"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  // Disable past dates and weekends
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const day = date.getDay();
                  return date < today || day === 0 || day === 6;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Select Time</label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant="outline"
                size="sm"
                className={cn(
                  "border-gray-300",
                  selectedTime === time ? "bg-neural-600 text-white hover:bg-neural-700" : "hover:bg-neural-50"
                )}
                onClick={() => setSelectedTime(time)}
              >
                <Clock className="mr-1 h-3 w-3" />
                {time}
              </Button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleSchedule}
          className="w-full bg-neural-600 hover:bg-neural-700"
          disabled={isBooking || !date || !selectedTime}
        >
          {isBooking ? "Scheduling..." : "Schedule Meeting"}
        </Button>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
