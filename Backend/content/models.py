# from django.db import models
# from django.utils import timezone
# from django.conf import settings
# from django.utils.translation import gettext_lazy as _
# from django.contrib.auth.models import User


# def upload_to(instance, filename):
    # return 'posts/{filename}'.format(filename=filename)


# class Category(models.Model):
    # name = models.CharField(max_length=100)

    # def __str__(self):
        # return self.name


# class Post(models.Model):

    # class PostObjects(models.Manager):
        # def get_queryset(self):
            # return super().get_queryset() .filter(status='published')

    # options = (
        # ('draft', 'Draft'),
        # ('published', 'Published'),
    # )

    # category = models.ForeignKey(
        # Category, on_delete=models.PROTECT, default=1)
    # title = models.CharField(max_length=100)
    # image = models.ImageField(
        # _("Image"), upload_to=upload_to, default='posts/default.jpg')
    # description = models.TextField()
    # slug = models.SlugField(max_length=250, unique_for_date='published')
    # published = models.DateTimeField(default=timezone.now)
    # author = models.ForeignKey(
        # User, on_delete=models.CASCADE, related_name='blog_posts')
    # status = models.CharField(
        # max_length=10, choices=options, default='published')
    # objects = models.Manager()  # default manager
    # postobjects = PostObjects()  # custom manager

    # class Meta:
        # ordering = ('-published',)

    # def __str__(self):
        # return self.title
        
        
        
# from django.db import models
# from datetime import datetime
# from django.template.defaultfilters import slugify
# from django.conf import settings
# from django.utils.translation import gettext_lazy as _
# from django.contrib.auth.models import User
# # from datetime import datetime
# # from django.template.defaultfilters import slugify

# def upload_to(instance, filename):
    # return 'posts/{filename}'.format(filename=filename)


# class Category(models.Model):
    # name = models.CharField(max_length=100)

    # def __str__(self):
        # return self.name

# class Categories(models.TextChoices):

    # FEDERAL_UNIVERSITIES = 'federal_universites'
    # STATE_UNIVERSITIES = 'state_universites'
    # PRIVATE_UNIVERSITES = 'private_universites'
    # POLYTHECNICS = 'polythecnics'
    # COLLEGE_OF_EDUCATION = 'college_of_education'
    # OTHERS = 'others'
    
    

# class Post(models.Model):

    # class PostObjects(models.Manager):
        # def get_queryset(self):
            # return super().get_queryset() .filter(status='published')

    # options = (
        # ('draft', 'Draft'),
        # ('published', 'Published'),
    # )
    
    
    # category = models.ForeignKey(
        # Category, on_delete=models.PROTECT, default=1)
    # title = models.CharField(max_length=50)
    # slug = models.SlugField()
    # categories = models.CharField(max_length=50, choices=Categories.choices, default=Categories.OTHERS)
    # image = models.ImageField(
        # _("Image"), upload_to=upload_to, default='posts/default.jpg')
    # description = models.TextField()
    # slug = models.SlugField(max_length=250, unique_for_date='published')
    # published = models.DateTimeField(default=datetime.now, blank=True)
    # author = models.ForeignKey(
        # User, on_delete=models.CASCADE, related_name='blog_posts', default='------')
    # status = models.CharField(
        # max_length=10, choices=options, default='published')
    # featured = models.BooleanField(default=False)
        
    # objects = models.Manager()  # default manager
    # postobjects = PostObjects()  # custom manager

    # class Meta:
        # ordering = ('-published',)

    # def __str__(self):
        # return self.title
    

    # def save(self, *args, **kwargs):
        # original_slug = slugify(self.title)
        # queryset = Post.objects.all().filter(slug__iexact=original_slug).count()

        # count = 1
        # slug = original_slug
        # while(queryset):
            # slug = original_slug + '-' + str(count)
            # count += 1
            # queryset = Post.objects.all().filter(slug__iexact=slug).count()

        # self.slug = slug
        # super(Post, self).save(*args, **kwargs)

        # # if self.featured:
            # # try:
                # # temp = Post.objects.get(featured=True)
                # # if self != temp:
                    # # temp.featured = False
                    # # temp.save()
            # # except Post.DoesNotExist:
                # # pass
        
       

    # def __str__(self):
        # return self.title
        
        



# from django.db import models
# from django.urls import reverse
# from django.utils.translation import gettext_lazy as _
# from mptt.models import MPTTModel, TreeForeignKey


# class Category(MPTTModel):
    # """
    # Category Table implimented with MPTT.
    # """

    # name = models.CharField(
        # verbose_name=_("Category Name"),
        # help_text=_("Required and unique"),
        # max_length=255,
        # unique=True,
    # )
    # slug = models.SlugField(verbose_name=_("Category safe URL"), max_length=255, unique=True)
    # parent = TreeForeignKey("self", on_delete=models.CASCADE, null=True, blank=True, related_name="children")
    # is_active = models.BooleanField(default=True)

    # class MPTTMeta:
        # order_insertion_by = ["name"]

    # class Meta:
        # verbose_name = _("Category")
        # verbose_name_plural = _("Categories")

    # def get_absolute_url(self):
        # return reverse("store:category_list", args=[self.slug])

    # def __str__(self):
        # return self.name


# class ProductType(models.Model):
    # """
    # ProductType Table will provide a list of the different types
    # of products that are for sale.
    # """

    # name = models.CharField(verbose_name=_("Product Name"), help_text=_("Required"), max_length=255, unique=True)
    # is_active = models.BooleanField(default=True)

    # class Meta:
        # verbose_name = _("Product Type")
        # verbose_name_plural = _("Product Types")

    # def __str__(self):
        # return self.name


# class ProductSpecification(models.Model):
    # """
    # The Product Specification Table contains product
    # specifiction or features for the product types.
    # """

    # product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)
    # name = models.CharField(verbose_name=_("Name"), help_text=_("Required"), max_length=255)

    # class Meta:
        # verbose_name = _("Product Specification")
        # verbose_name_plural = _("Product Specifications")

    # def __str__(self):
        # return self.name


# class Product(models.Model):
    # """
    # The Product table contining all product items.
    # """

    # product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)
    # category = models.ForeignKey(Category, on_delete=models.RESTRICT)
    # title = models.CharField(
        # verbose_name=_("title"),
        # help_text=_("Required"),
        # max_length=255,
    # )
    # description = models.TextField(verbose_name=_("description"), help_text=_("Not Required"), blank=True)
    # slug = models.SlugField(max_length=255)
    # regular_price = models.DecimalField(
        # verbose_name=_("Regular price"),
        # help_text=_("Maximum 999.99"),
        # error_messages={
            # "name": {
                # "max_length": _("The price must be between 0 and 999.99."),
            # },
        # },
        # max_digits=5,
        # decimal_places=2,
    # )
    # discount_price = models.DecimalField(
        # verbose_name=_("Discount price"),
        # help_text=_("Maximum 999.99"),
        # error_messages={
            # "name": {
                # "max_length": _("The price must be between 0 and 999.99."),
            # },
        # },
        # max_digits=5,
        # decimal_places=2,
    # )
    # is_active = models.BooleanField(
        # verbose_name=_("Product visibility"),
        # help_text=_("Change product visibility"),
        # default=True,
    # )
    # created_at = models.DateTimeField(_("Created at"), auto_now_add=True, editable=False)
    # updated_at = models.DateTimeField(_("Updated at"), auto_now=True)

    # class Meta:
        # ordering = ("-created_at",)
        # verbose_name = _("Product")
        # verbose_name_plural = _("Products")

    # def get_absolute_url(self):
        # return reverse("store:product_detail", args=[self.slug])

    # def __str__(self):
        # return self.title


# class ProductSpecificationValue(models.Model):
    # """
    # The Product Specification Value table holds each of the
    # products individual specification or bespoke features.
    # """

    # product = models.ForeignKey(Product, on_delete=models.CASCADE)
    # specification = models.ForeignKey(ProductSpecification, on_delete=models.RESTRICT)
    # value = models.CharField(
        # verbose_name=_("value"),
        # help_text=_("Product specification value (maximum of 255 words"),
        # max_length=255,
    # )

    # class Meta:
        # verbose_name = _("Product Specification Value")
        # verbose_name_plural = _("Product Specification Values")

    # def __str__(self):
        # return self.value


# class ProductImage(models.Model):
    # """
    # The Product Image table.
    # """

    # product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_image")
    # image = models.ImageField(
        # verbose_name=_("image"),
        # help_text=_("Upload a product image"),
        # upload_to="images/",
        # default="images/default.png",
    # )
    # alt_text = models.CharField(
        # verbose_name=_("Alternative text"),
        # help_text=_("Please add alternative text"),
        # max_length=255,
        # null=True,
        # blank=True,
    # )
    # is_feature = models.BooleanField(default=False)
    # created_at = models.DateTimeField(auto_now_add=True, editable=False)
    # updated_at = models.DateTimeField(auto_now=True)

    # class Meta:
        # verbose_name = _("Product Image")
        # verbose_name_plural = _("Product Images")




        
        
# from django.db import models
# from datetime import datetime
# from django.template.defaultfilters import slugify

# class Categories(models.TextChoices):
    # WORLD = 'world'
    # ENVIRONMENT = 'environment'
    # TECHNOLOGY = 'technology'
    # DESIGN = 'design'
    # CULTURE = 'culture'
    # BUSINESS = 'business'
    # POLITICS = 'politics'
    # OPINION = 'opinion'
    # SCIENCE = 'science'
    # HEALTH = 'health'
    # STYLE = 'style'
    # TRAVEL = 'travel'

# class BlogPost(models.Model):
    # title = models.CharField(max_length=50)
    # slug = models.SlugField()
    # category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.WORLD)
    # thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    # excerpt = models.CharField(max_length=150)
    # month = models.CharField(max_length=3)
    # day = models.CharField(max_length=2)
    # content = models.TextField()
    # featured = models.BooleanField(default=False)
    # date_created = models.DateTimeField(default=datetime.now, blank=True)

    # def save(self, *args, **kwargs):
        # original_slug = slugify(self.title)
        # queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        # count = 1
        # slug = original_slug
        # while(queryset):
            # slug = original_slug + '-' + str(count)
            # count += 1
            # queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        # self.slug = slug

        # if self.featured:
            # try:
                # temp = BlogPost.objects.get(featured=True)
                # if self != temp:
                    # temp.featured = False
                    # temp.save()
            # except BlogPost.DoesNotExist:
                # pass
        
        # super(BlogPost, self).save(*args, **kwargs)

    # def __str__(self):
        # return self.title
        
        
    
    
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class University(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=300, null=True, blank=True)
    address = models.CharField(max_length=300, null=True, blank=True)

    def __str__(self):
        return str(self.name)

class Ads(models.Model):
    university = models.ForeignKey(
        University, on_delete=models.PROTECT, default=1)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to=upload_to, default='/images/placeholder.png')
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


        
