import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from 'lucide-react';
import travel from "@/assets/helo.png";
import Image from 'next/image';
const ClassActivities = () => {
  // Sample data for activities
  const activities = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: "Back to School Party",
    date: "15/05/2024",
    class: "11th",
    image: travel
  }));

  return (
    <div className="p-6  mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 px-4 py-2 rounded-md">
            <span className="text-sm">Total CCA: 20</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">2024-2025</SelectItem>
              <SelectItem value="12">2025-2026</SelectItem>
            </SelectContent>
          </Select>

          <Button className="flex items-center gap-2 bg-blue-600">
            <Plus size={16} />
            Add CCA
          </Button>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm">
              Class-{activity.class}
            </div>
            <Image 
              src={activity.image} 
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-lg">{activity.title}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Date: {activity.date}
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassActivities;