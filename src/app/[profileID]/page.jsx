import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page({ params }) {
  return (
    <div className="flex justify-center">
    <div className="flex flex-col items-center w-[1200px]">
      <div className="relative flex">
        <div className="absolute">
          {/* <Card >
            Followers
          </Card> */}
          <Card x-chunk="dashboard-01-chunk-1" className="w-[250px] border-none rounded-[34.2px] h-[250px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Followers
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="relative ml-[250px] flex justify-end items-start">
          {/* <Card >
            About
          </Card> */}
          <Card x-chunk="dashboard-01-chunk-1" className="w-[500px] ml-[10.314px] border-none h-[250px] rounded-[34.2px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                About
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="relative flex justify-end items-end">
          {/* <Card >
            Ads
          </Card> */}
          <Card x-chunk="dashboard-01-chunk-1"className="w-[250px] ml-[10.314px] h-[500px] border-none rounded-[34.2px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ads
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="absolute mt-[260px] flex justify-start items-start">
          {/* <Card className="w-[250px] h-[250px] rounded-[34.2px] border-none">
            My stack
          </Card> */}
          <Card x-chunk="dashboard-01-chunk-1" className="w-[250px] h-[250px] rounded-[34.2px] border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                MY stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="absolute mt-[260px] ml-[260px] flex justify-end items-end">
          {/* <Card >
            What special happened;
          </Card> */}
          <Card x-chunk="dashboard-01-chunk-1" className="w-[500px] h-[510px] rounded-[34.2px] border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Blog;
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="absolute mt-[510px] ml-[770.696px] flex justify-start items-start">
          {/* <Card >
            GitHub
          </Card> */}
          <Card x-chunk="dashboard-01-chunk-1" className="w-[250px] h-[260px] rounded-[34.2px] border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="absolute mt-[520px] ml-[0px] flex justify-start items-start">
          <Card x-chunk="dashboard-01-chunk-1" className="w-[250px] h-[510px] rounded-[34.2px] border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                My Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="absolute mt-[780px] ml-[260px] flex justify-start items-start">
          <Card x-chunk="dashboard-01-chunk-1" className="w-[250px] h-[250px] rounded-[34.2px] border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                x.com
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <div className="absolute mt-[780px] ml-[520px] flex justify-start items-start">
          {/* <Card className="w-[500px] h-[250px] rounded-[34.2px] border-none">
            Contact Me
          </Card> */}
          <Card x-chunk="dashboard-01-chunk-1" className=" w-[500px] h-[250px] rounded-[34.2px] border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Contact Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
  
        

  )


}