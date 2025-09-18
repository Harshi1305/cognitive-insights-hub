import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Users, TrendingUp, BarChart3 } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-neural bg-clip-text text-transparent">
          Cognitive Insights Hub
        </h1>
        <p className="text-xl text-muted-foreground">
          Advanced analytics dashboard for student cognitive performance and learning insights
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground">+5.2% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Personas</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Identified clusters</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ML Accuracy</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.7%</div>
            <p className="text-xs text-muted-foreground">Prediction model</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cognitive Skills Analysis</CardTitle>
            <CardDescription>Student performance across key cognitive areas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Attention & Focus</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Comprehension</span>
                <span>88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Memory Retention</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Problem Solving</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
            <CardDescription>AI-powered performance insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-sm mb-2">🧠 Learning Pattern Detected</h4>
              <p className="text-sm text-muted-foreground">Visual learners show 23% higher retention rates with interactive content.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-sm mb-2">📈 Performance Prediction</h4>
              <p className="text-sm text-muted-foreground">Students with high attention scores likely to improve by 15% next quarter.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-sm mb-2">👥 Cluster Analysis</h4>
              <p className="text-sm text-muted-foreground">7 distinct learning personas identified for personalized interventions.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}