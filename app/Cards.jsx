import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const Cards = () => {
  return (
    <div className="p-6 mx-auto max-w-xs">
      <Card>
        <CardHeader>
          <CardTitle>Street Fighter 6</CardTitle>
          <CardDescription>Attendees : 299</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Step into the arena and unleash your inner warrior at the ultimate Street Fighter Tournament! Fight for glory, combos, and the title of champion—are you ready to battle?
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p>25 July 2025</p>
          <Button variant="default">View Event</Button>
        </CardFooter>
      </Card>
    </div>
  );
};


export default Cards