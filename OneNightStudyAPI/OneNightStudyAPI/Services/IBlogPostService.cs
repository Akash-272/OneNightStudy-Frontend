using OneNightStudyAPI.Models;

namespace OneNightStudyAPI.Services
{
    public interface IBlogPostService
    {
        Task<IEnumerable<BlogPost>> GetAllAsync();
        Task<BlogPost?> GetByIdAsync(int id);
        Task<IEnumerable<BlogPost>> SearchAsync(string query);
        Task<BlogPost> CreateAsync(BlogPost post);
        Task<bool> UpdateAsync(int id, BlogPost post);
        Task<bool> DeleteAsync(int id);
    }
}
