"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react"

interface Post {
  id: string
  author: {
    name: string
    avatar: string
    role?: string
  }
  content: string
  timestamp: string
  likes: number
  comments: number
  isLiked: boolean
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: {
      name: "Jane Cooper",
      avatar: "/professional-woman.png",
      role: "Web Developer",
    },
    content:
      "Acabei de lançar meu primeiro projeto em React! É incrível como essa biblioteca facilita o desenvolvimento de interfaces interativas. #ReactJS #WebDev",
    timestamp: "Publicado há 1h",
    likes: 12,
    comments: 3,
    isLiked: false,
  },
  {
    id: "2",
    author: {
      name: "Devon Lane",
      avatar: "/man-developer.jpg",
    },
    content:
      "Fala pessoal 👋\n\nFinalmente consegui resolver aquele bug chato que estava me atormentando há dias. A sensação é incrível!\n\nAlguém mais já passou por isso? 😅",
    timestamp: "Publicado há 2h",
    likes: 8,
    comments: 5,
    isLiked: true,
  },
  {
    id: "3",
    author: {
      name: "Jacob Jones",
      avatar: "/man-casual.jpg",
    },
    content: "Vamos com tudo pessoal! 💪",
    timestamp: "Publicado há 3h",
    likes: 15,
    comments: 2,
    isLiked: false,
  },
  {
    id: "4",
    author: {
      name: "Jenny Wilson",
      avatar: "/woman-casual.jpg",
    },
    content: "Adoro esse layout! 🔥",
    timestamp: "Publicado há 4h",
    likes: 6,
    comments: 1,
    isLiked: false,
  },
  {
    id: "5",
    author: {
      name: "Marvin Cooper",
      avatar: "/man-business.jpg",
    },
    content: "🚀",
    timestamp: "Publicado há 5h",
    likes: 3,
    comments: 0,
    isLiked: false,
  },
]


interface Profile {
  name: string;
  avatar: string;
  role: string;
}

export function IgniteFeed() {
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [newPost, setNewPost] = useState("")
  const [profile, setProfile] = useState<Profile>({
    name: "Lesley Alexander",
    avatar: "/woman-profile.jpg",
    role: "UI Designer",
  });
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editProfile, setEditProfile] = useState<Profile>(profile);

  const handleEditProfileOpen = () => {
    setEditProfile(profile);
    setEditProfileOpen(true);
  };

  const handleEditProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditProfileSave = () => {
    setProfile(editProfile);
    setEditProfileOpen(false);
  };

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const handlePublish = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now().toString(),
        author: {
          name: "Lesley Alexander",
          avatar: "/woman-profile.jpg",
          role: "UI Designer",
        },
        content: newPost,
        timestamp: "Agora mesmo",
        likes: 0,
        comments: 0,
        isLiked: false,
      }
      setPosts([post, ...posts])
      setNewPost("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <h1 className="text-xl font-bold text-white">Ignite Feed</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Profile */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src="/cover-abstract.jpg"
                      alt="Cover"
                      className="w-full h-20 object-cover rounded-lg mb-4"
                    />
                    <Avatar className="w-16 h-16 mx-auto -mt-8 border-4 border-gray-800">
                      <AvatarImage src="/woman-profile.jpg" />
                      <AvatarFallback>LA</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{profile.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{profile.role}</p>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-transparent"
                    onClick={handleEditProfileOpen}
                  >
                    Editar seu perfil
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {/* New Post */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback>
                      {profile.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-white">{profile.name}</h4>
                    <p className="text-gray-400 text-sm">{profile.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Escreva algo interessante..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 resize-none"
                  rows={3}
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handlePublish}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    disabled={!newPost.trim()}
                  >
                    Publicar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card key={post.id} className="bg-gray-800 border-gray-700">
      {/* Modal de edição de perfil */}
      {editProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md border border-gray-700 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setEditProfileOpen(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-white">Editar perfil</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={editProfile.name}
                  onChange={handleEditProfileChange}
                  className="w-full rounded bg-gray-700 border border-gray-600 text-white px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Cargo</label>
                <input
                  type="text"
                  name="role"
                  value={editProfile.role}
                  onChange={handleEditProfileChange}
                  className="w-full rounded bg-gray-700 border border-gray-600 text-white px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">URL do Avatar</label>
                <input
                  type="text"
                  name="avatar"
                  value={editProfile.avatar}
                  onChange={handleEditProfileChange}
                  className="w-full rounded bg-gray-700 border border-gray-600 text-white px-3 py-2"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setEditProfileOpen(false)}>
                Cancelar
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={handleEditProfileSave}>
                Salvar
              </Button>
            </div>
          </div>
        </div>
      )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-white">{post.author.name}</h4>
                        {post.author.role && <p className="text-gray-400 text-sm">{post.author.role}</p>}
                        <p className="text-gray-500 text-xs">{post.timestamp}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4 whitespace-pre-wrap">{post.content}</p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 ${
                        post.isLiked ? "text-red-500 hover:text-red-400" : "text-gray-400 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${post.isLiked ? "fill-current" : ""}`} />
                      <span>{post.likes}</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-500"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-gray-400 hover:text-emerald-500"
                    >
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
