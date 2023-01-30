from django.db import models

# Create your models here.
class Annonce(models.Model):
   annonceur = models.CharField(max_length=150)
   description  = models.TextField()
   info_contact = models.CharField(max_length=200)
   theme = models.CharField(max_length=150)
   categorie = models.CharField(max_length=200)
   modaliter = models.CharField(max_length=200)
   dat = models.DateTimeField(auto_now_add=True)
   tarif = models.DecimalField(max_digits=7,decimal_places=2,null=False,blank=False)
   description = models.TextField()
   photo = models.ImageField(upload_to='uploads/images',null = False, blank=False)
   favorite = models.BooleanField(default=False)
   def __str__(self):
      return self.annonceur

files = models.FileField(upload_to='/uploads/files')
class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    def __str__(self):
       return self.username