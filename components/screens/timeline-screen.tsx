"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  CalendarIcon,
  FileTextIcon,
  MessageCircleIcon,
  ShareIcon,
  ThumbsUpIcon,
  ImageIcon,
  SearchIcon,
  FilterIcon,
  BellIcon,
} from "lucide-react"

export function TimelineScreen() {
  const [activeTab, setActiveTab] = useState("all")
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>({})
  const [showComments, setShowComments] = useState<Record<number, boolean>>({})
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({})

  // Mock timeline data with posts from different users
  const timelineItems = [
    {
      id: 1,
      type: "post",
      user: {
        name: "Michael Chen",
        avatar: "/diverse-group.png",
        role: "Design Manager",
      },
      content:
        "Excited to announce that our team has been nominated for the Design Excellence Award for the mobile app redesign project! Congratulations to everyone involved, especially @JaneDoe for leading the UX research. #DesignExcellence #TeamAchievement",
      image: "/timeline-project.png",
      time: "1 hour ago",
      likes: 24,
      comments: [
        {
          id: 101,
          user: {
            name: "Sarah Johnson",
            avatar: "/diverse-woman-portrait.png",
            role: "Product Manager",
          },
          content: "This is amazing news! Congratulations to the entire team!",
          time: "45 minutes ago",
          likes: 5,
        },
        {
          id: 102,
          user: {
            name: "Jane Doe",
            avatar: "/diverse-person-portrait.png",
            role: "Product Designer",
          },
          content: "Thank you for the mention! It was truly a team effort.",
          time: "30 minutes ago",
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      type: "post",
      user: {
        name: "Jane Doe",
        avatar: "/diverse-person-portrait.png",
        role: "Product Designer",
      },
      content:
        "Just completed the Advanced UX Design Principles course! Looking forward to applying these new skills to our upcoming projects. #LearningAndDevelopment #UXDesign",
      image: "/timeline-ux-design.png",
      time: "3 hours ago",
      likes: 18,
      comments: [
        {
          id: 103,
          user: {
            name: "Michael Chen",
            avatar: "/diverse-group.png",
            role: "Design Manager",
          },
          content: "Great job! Looking forward to seeing how you apply these skills.",
          time: "2 hours ago",
          likes: 2,
        },
      ],
    },
    {
      id: 3,
      type: "achievement",
      user: {
        name: "David Wilson",
        avatar: "/diverse-man-portrait.png",
        role: "Frontend Developer",
      },
      content: "Just earned the 'Full Stack Developer' certification! Thanks to everyone who helped me along the way.",
      icon: "🏆",
      time: "5 hours ago",
      likes: 32,
      comments: [
        {
          id: 104,
          user: {
            name: "Jane Doe",
            avatar: "/diverse-person-portrait.png",
            role: "Product Designer",
          },
          content: "Congratulations David! Well deserved!",
          time: "4 hours ago",
          likes: 1,
        },
      ],
    },
    {
      id: 4,
      type: "work_anniversary",
      user: {
        name: "Sarah Johnson",
        avatar: "/diverse-woman-portrait.png",
        role: "Product Manager",
      },
      content:
        "Celebrating 3 years at the company today! It's been an incredible journey working with such talented people.",
      icon: "🎉",
      time: "Yesterday",
      likes: 45,
      comments: [
        {
          id: 105,
          user: {
            name: "Jane Doe",
            avatar: "/diverse-person-portrait.png",
            role: "Product Designer",
          },
          content: "Happy work anniversary, Sarah! It's been a pleasure working with you!",
          time: "23 hours ago",
          likes: 4,
        },
      ],
    },
    {
      id: 5,
      type: "project",
      user: {
        name: "Alex Rodriguez",
        avatar: "/diverse-person-2.png",
        role: "UX Researcher",
      },
      content:
        "Just kicked off the user research phase for our new healthcare project. Looking for volunteers for usability testing next week!",
      time: "2 days ago",
      likes: 15,
      comments: [
        {
          id: 106,
          user: {
            name: "Jane Doe",
            avatar: "/diverse-person-portrait.png",
            role: "Product Designer",
          },
          content: "I'd love to help with the usability testing!",
          time: "2 days ago",
          likes: 2,
        },
      ],
    },
  ]

  const handleCommentChange = (postId: number, value: string) => {
    setCommentInputs({
      ...commentInputs,
      [postId]: value,
    })
  }

  const handleAddComment = (postId: number) => {
    if (!commentInputs[postId]?.trim()) return

    // In a real app, you would send this to an API
    console.log(`Adding comment to post ${postId}: ${commentInputs[postId]}`)

    // Clear the input
    setCommentInputs({
      ...commentInputs,
      [postId]: "",
    })
  }

  const toggleComments = (postId: number) => {
    setShowComments({
      ...showComments,
      [postId]: !showComments[postId],
    })
  }

  const toggleLike = (postId: number) => {
    setLikedPosts({
      ...likedPosts,
      [postId]: !likedPosts[postId],
    })
  }

  const filteredItems =
    activeTab === "all"
      ? timelineItems
      : timelineItems.filter((item) =>
          activeTab === "posts"
            ? item.type === "post"
            : activeTab === "achievements"
              ? item.type === "achievement" || item.type === "work_anniversary"
              : activeTab === "projects"
                ? item.type === "project"
                : true,
        )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Timeline</h2>
        <p className="text-muted-foreground">Stay connected with your colleagues and company updates.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Post creation */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src="/diverse-person-portrait.png" alt="Jane Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Textarea placeholder="What's on your mind, Jane?" className="resize-none" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Photo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Event
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <FileTextIcon className="h-4 w-4 mr-2" />
                      Document
                    </Button>
                  </div>
                  <Button size="sm">Post</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <FilterIcon className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <TabsContent value="all" className="mt-0">
              {/* Timeline items */}
              {filteredItems.map((item) => (
                <Card key={item.id} className="mb-4">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarImage src={item.user.avatar || "/placeholder.svg"} alt={item.user.name} />
                          <AvatarFallback>{item.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{item.user.name}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <span>{item.user.role}</span>
                            <span>•</span>
                            <span>{item.time}</span>
                            {(item.type === "achievement" || item.type === "work_anniversary") && (
                              <>
                                <span>•</span>
                                <span className="flex items-center">
                                  {item.type === "achievement" ? "Achievement" : "Work Anniversary"} {item.icon}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm">{item.content}</p>
                      </div>

                      {item.image && (
                        <div className="rounded-md overflow-hidden">
                          <img src={item.image || "/placeholder.svg"} alt="Post" className="w-full h-auto" />
                        </div>
                      )}

                      <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t">
                        <div className="flex items-center gap-1">
                          <ThumbsUpIcon className="h-4 w-4" />
                          <span>{likedPosts[item.id] ? item.likes + 1 : item.likes} likes</span>
                        </div>
                        <div>
                          <span>{item.comments?.length || 0} comments</span>
                        </div>
                      </div>

                      <div className="flex justify-between border-t pt-2">
                        <Button
                          variant={likedPosts[item.id] ? "default" : "ghost"}
                          size="sm"
                          className={`flex-1 ${!likedPosts[item.id] && "text-muted-foreground"}`}
                          onClick={() => toggleLike(item.id)}
                        >
                          <ThumbsUpIcon className="h-4 w-4 mr-2" />
                          {likedPosts[item.id] ? "Liked" : "Like"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex-1 text-muted-foreground"
                          onClick={() => toggleComments(item.id)}
                        >
                          <MessageCircleIcon className="h-4 w-4 mr-2" />
                          Comment
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
                          <ShareIcon className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>

                      {/* Comments section */}
                      {(showComments[item.id] || item.comments?.length > 0) && (
                        <div className="space-y-4 pt-2 border-t">
                          {item.comments?.map((comment) => (
                            <div key={comment.id} className="flex gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                                <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="bg-muted p-3 rounded-lg">
                                  <div className="font-medium text-sm">{comment.user.name}</div>
                                  <p className="text-sm">{comment.content}</p>
                                </div>
                                <div className="flex gap-4 mt-1 text-xs">
                                  <button className="text-muted-foreground hover:text-foreground">Like</button>
                                  <button className="text-muted-foreground hover:text-foreground">Reply</button>
                                  <span className="text-muted-foreground">{comment.time}</span>
                                </div>
                              </div>
                            </div>
                          ))}

                          {/* Add comment input */}
                          <div className="flex gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/diverse-person-portrait.png" alt="Jane Doe" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 flex gap-2">
                              <Input
                                placeholder="Write a comment..."
                                value={commentInputs[item.id] || ""}
                                onChange={(e) => handleCommentChange(item.id, e.target.value)}
                                className="flex-1"
                              />
                              <Button size="sm" onClick={() => handleAddComment(item.id)}>
                                Post
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="posts" className="mt-0">
              {/* This content is dynamically filtered */}
            </TabsContent>

            <TabsContent value="achievements" className="mt-0">
              {/* This content is dynamically filtered */}
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              {/* This content is dynamically filtered */}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search timeline..." className="pl-9" />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BellIcon className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/diverse-group.png" alt="Michael Chen" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">Michael Chen</span> mentioned you in a post
                  </p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/diverse-woman-portrait.png" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">Sarah Johnson</span> liked your comment
                  </p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full">
                View all notifications
              </Button>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Trending Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/10">
                    #DesignExcellence
                  </Badge>
                  <span className="text-xs text-muted-foreground">24 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/10">
                    #TeamAchievement
                  </Badge>
                  <span className="text-xs text-muted-foreground">18 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/10">
                    #UXDesign
                  </Badge>
                  <span className="text-xs text-muted-foreground">15 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/10">
                    #LearningAndDevelopment
                  </Badge>
                  <span className="text-xs text-muted-foreground">12 posts</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Connections */}
          <Card>
            <CardHeader>
              <CardTitle>People You May Know</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/diverse-person-3.png" alt="Emily Zhang" />
                    <AvatarFallback>EZ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Emily Zhang</p>
                    <p className="text-xs text-muted-foreground">UX Writer</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Connect
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/diverse-person-4.png" alt="James Wilson" />
                    <AvatarFallback>JW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">James Wilson</p>
                    <p className="text-xs text-muted-foreground">UI Developer</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
