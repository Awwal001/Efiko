# from django.contrib import admin
# from mptt.admin import MPTTModelAdmin

# from .models import (
    # Category,
    # Product,
    # ProductImage,
    # ProductSpecification,
    # ProductSpecificationValue,
    # ProductType,
# )

# admin.site.register(Category, MPTTModelAdmin)


# class ProductSpecificationInline(admin.TabularInline):
    # model = ProductSpecification


# @admin.register(ProductType)
# class ProductTypeAdmin(admin.ModelAdmin):
    # inlines = [
        # ProductSpecificationInline,
    # ]


# class ProductImageInline(admin.TabularInline):
    # model = ProductImage


# class ProductSpecificationValueInline(admin.TabularInline):
    # model = ProductSpecificationValue


# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
    # inlines = [
        # ProductSpecificationValueInline,
        # ProductImageInline,
    # ]
    
    
from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
