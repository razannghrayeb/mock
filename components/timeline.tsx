import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, FileTextIcon, MessageCircleIcon, ShareIcon, ThumbsUpIcon, ImageIcon } from "lucide-react"

export function Timeline() {
  // Mock timeline data
  const timelineItems = [
    {
      id: 1,
      type: "post",
      user: {
        name: "Jane Doe",
        avatar: "/diverse-person-portrait.png",
        role: "Product Designer",
      },
      content:
        "Just completed the Advanced UX Design Principles course! Looking forward to applying these new skills to our upcoming projects. #LearningAndDevelopment #UXDesign",
      image: "/timeline-ux-design.png",
      time: "2 hours ago",
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      type: "achievement",
      user: {
        name: "Jane Doe",
        avatar: "/diverse-person-portrait.png",
        role: "Product Designer",
      },
      content: "Received a certification in UX Design from the UX Design Institute!",
      icon: "🏆",
      time: "2 days ago",
      likes: 24,
      comments: 8,
    },
    {
      id: 3,
      type: "work_anniversary",
      user: {
        name: "Jane Doe",
        avatar: "/diverse-person-portrait.png",
        role: "Product Designer",
      },
      content: "Celebrating 2 years at the company today! It's been an amazing journey so far.",
      icon: "🎉",
      time: "1 week ago",
      likes: 36,
      comments: 15,
    },
    {
      id: 4,
      type: "project",
      user: {
        name: "Jane Doe",
        avatar: "/diverse-person-portrait.png",
        role: "Product Designer",
      },
      content: "Just wrapped up the mobile app redesign project. Thanks to everyone who contributed!",
      image: "/timeline-project.png",
      time: "2 weeks ago",
      likes: 18,
      comments: 7,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Post creation */}
      <div className="rounded-lg border p-4 space-y-4">
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

      {/* Timeline items */}
      {timelineItems.map((item) => (
        <div key={item.id} className="rounded-lg border p-4 space-y-4">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={item.user.avatar || "/placeholder.svg"} alt={item.user.name} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{item.user.name}</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <span>{item.time}</span>
                {item.type === "achievement" && (
                  <>
                    <span>•</span>
                    <span className="flex items-center">
                      <span className="mr-1">Achievement</span>
                      {item.icon}
                    </span>
                  </>
                )}
                {item.type === "work_anniversary" && (
                  <>
                    <span>•</span>
                    <span className="flex items-center">
                      <span className="mr-1">Work Anniversary</span>
                      {item.icon}
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
              <span>{item.likes} likes</span>
            </div>
            <div>
              <span>{item.comments} comments</span>
            </div>
          </div>

          <div className="flex justify-between border-t pt-2">
            <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
              <ThumbsUpIcon className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
              <MessageCircleIcon className="h-4 w-4 mr-2" />
              Comment
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
              <ShareIcon className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
