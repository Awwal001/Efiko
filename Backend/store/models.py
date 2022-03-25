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
        
        



from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(
        verbose_name=_("image"),
        help_text=_("Upload a product image"),
        upload_to="images/",
        default="images/default.png",
    )
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)