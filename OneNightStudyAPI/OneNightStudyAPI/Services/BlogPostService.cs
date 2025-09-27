using Microsoft.EntityFrameworkCore;
using OneNightStudyAPI.Data;
using OneNightStudyAPI.Models;

namespace OneNightStudyAPI.Services
{
    public class BlogPostService : IBlogPostService
    {
        private readonly AppDbContext _context;

        public BlogPostService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<BlogPost> CreateAsync(BlogPost post)
        {
            _context.BlogPosts.Add(post);
            await _context.SaveChangesAsync();
            return post;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var post = await _context.BlogPosts.FindAsync(id);
            if (post == null) return false;

            _context.BlogPosts.Remove(post);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<BlogPost>> GetAllAsync()
        {
            return await _context.BlogPosts.ToListAsync();
        }

        public async Task<BlogPost?> GetByIdAsync(int id)
        {
            return await _context.BlogPosts.FindAsync(id);
        }

        public async Task<IEnumerable<BlogPost>> SearchAsync(string query)
        {
            query = query.ToLower();

            var allPosts = await _context.BlogPosts.ToListAsync();

            return allPosts
                .Where(x =>
                    (!string.IsNullOrEmpty(x.Title) && x.Title.ToLower().Contains(query)) ||
                    (!string.IsNullOrEmpty(x.Subject) && x.Subject.ToLower().Contains(query)) ||
                    (!string.IsNullOrEmpty(x.Topic) && x.Topic.ToLower().Contains(query)) ||
                    (x.Tags != null && x.Tags.Any(t => t.ToLower().Contains(query)))
                )
                .ToList(); 
        }

        public async Task<bool> UpdateAsync(int id, BlogPost updated)
        {
            var existing = await _context.BlogPosts.FindAsync(id);
            if (existing == null) return false;

            existing.Title = updated.Title;
            existing.Subject = updated.Subject;
            existing.Topic = updated.Topic;
            existing.EstimatedTimeInMinutes = updated.EstimatedTimeInMinutes;
            existing.Content = updated.Content;
            existing.CodeSnippet = updated.CodeSnippet;
            existing.YouTubeLink = updated.YouTubeLink;
            existing.UsefulLinks = updated.UsefulLinks;
            existing.Tags = updated.Tags;

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
