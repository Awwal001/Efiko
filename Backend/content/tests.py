from django.test import TestCase
from django.contrib.auth.models import User
from content.models import Post, Category


class Test_Create_Post(TestCase):

    @classmethod
    def setUp TestData(cls):
        test_category = Category.objects.create(name='django')
        testuser1 = User.objects.create_user(
            username='test_user1', password='123456789')
        test_post = Post.objects.create(category_id=1, title='Post Title', author_id=1, slug='post-title', description='Post description', status='published')
    
    def test_blog_content(self):
        post = Post.postobjects.get(id=1)
        cat = Category.objects.get(id=1)
        author = f'{post.author}'
        title = f'{post.title}'
        description = f'{post.description}'
        status = f'{post.status}'
        self.assertEqual(author, 'test_user1')
        self.assertEqual(title, 'Post Title')
        self.assertEqual(description, 'Post description')
        self.assertEqual(status, 'published')
        self.assertEqual(str(post), 'Post Title')
        self.assertEqual(str(cat), 'django')
        