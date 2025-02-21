import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Bell, Download, Search, Share2, Info } from 'lucide-react';

const VehicleTracking = () => {
  const vehicles = Array(3).fill({
    id: "HR XXXX 123",
    location: "Rajiv Chowk, Haryana",
    lastUpdate: "05:46 PM",
    speed: "200 km/h",
    distance: "100 Km Today",
    status: "Running",
    driver: "Ravi Kumar",
    helper: "Ravi Kumar",
    phone: "8545652545"
  });

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">All Vehicle</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">50</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Running</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">15</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Stopped</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">15</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search" className="pl-8 w-64" />
            </div>
            <Button variant="outline" className="gap-2">
              <Bell className="h-4 w-4" />
              GPS Alert
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Vehicle List */}
        <div className="w-96 border-r overflow-auto">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="p-4 border-b hover:bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">{vehicle.id}</div>
                  <div className="flex items-center text-sm text-gray-500 gap-1">
                    <MapPin className="h-4 w-4" />
                    {vehicle.location}
                  </div>
                  <div className="text-xs text-gray-500">
                    Last Update: {vehicle.lastUpdate}
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  {vehicle.status}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>{vehicle.speed}</span>
                <span>|</span>
                <span>{vehicle.distance}</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Driver: {vehicle.driver}</div>
                  <div className="text-gray-500">Helper: {vehicle.helper}</div>
                  <div className="text-gray-500">{vehicle.phone}</div>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="default" className="bg-blue-600 text-white h-8">
                    View Info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-gray-100 p-4">
          <div className="h-full rounded-lg bg-white">
            {/* Map would be integrated here */}
            <div className="h-full flex items-center justify-center text-gray-500">
              Map Integration Area
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTracking;