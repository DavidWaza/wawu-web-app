import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabComponent = () => {
  return (
    <div>
         <Tabs defaultValue="Week" className="">
              <TabsList className="flex items-center">
                <TabsTrigger value="Week" className=''>Week</TabsTrigger>
                <TabsTrigger value="Today">Today</TabsTrigger>
              </TabsList>
              <div>
                {/* <TabsContent value="Week">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="Today">
                Change your password here.
              </TabsContent> */}
              </div>
            </Tabs>
    </div>
  )
}

export default TabComponent