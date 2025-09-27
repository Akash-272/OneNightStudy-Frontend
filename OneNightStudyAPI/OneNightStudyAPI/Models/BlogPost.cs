namespace OneNightStudyAPI.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
        public string Topic { get; set; }
        public int EstimatedTimeInMinutes { get; set; }
        public string Content { get; set; }
        public string CodeSnippet { get; set; }
        public string YouTubeLink { get; set; }
        public List<string> UsefulLinks { get; set; }
        public List<string> Tags { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
