using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OneNightStudyAPI.Models;
using OneNightStudyAPI.Services;

namespace OneNightStudyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IBlogPostService _service;

        public BlogPostsController(IBlogPostService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var posts = await _service.GetAllAsync();
            return Ok(posts);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var post = await _service.GetByIdAsync(id);
            return post == null ? NotFound() : Ok(post);
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search([FromQuery] string q)
        {
            var results = await _service.SearchAsync(q);
            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Create(BlogPost post)
        {
            var newPost = await _service.CreateAsync(post);
            return CreatedAtAction(nameof(Get), new { id = newPost.Id }, newPost);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BlogPost post)
        {
            var success = await _service.UpdateAsync(id, post);
            return success ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var success = await _service.DeleteAsync(id);
            return success ? NoContent() : NotFound();
        }
    }
}
