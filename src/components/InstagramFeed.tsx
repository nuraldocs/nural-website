
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  // Sample Instagram post data
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7",
      likes: 432,
      caption: "Market analysis session with our top clients #TradingSuccess"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      likes: 287,
      caption: "Investment strategies that work in volatile markets #FinancialFreedom"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
      likes: 526,
      caption: "Our team celebrating another successful quarter #NeuralTeam"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      likes: 318,
      caption: "Workshop on advanced trading techniques #TradingWorkshop"
    }
  ];

  return (
    <section id="instagram" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-6 w-6 text-neural-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Follow Us On Instagram</h2>
          </div>
          <p className="text-lg text-gray-600">
            Stay updated with our latest trading insights, success stories, and events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden neural-shadow group hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">♥ {post.likes} likes</span>
                  <a href="#" className="text-neural-600 text-sm font-medium hover:underline">View Post</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neural-600 hover:text-neural-700 font-medium"
          >
            <Instagram size={20} />
            <span>@neural_trading</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
