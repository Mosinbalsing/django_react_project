from django.shortcuts import render
from django.http import JsonResponse
from django.urls import path
from .products import products 
from .products import necklaces
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product


# Create your views here.
@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
        'route': 'register',
        'method': 'POST',
        'body': {
            'username': 'string',
            'email': 'string',
            'password': 'string'
        }
        },
        {
        'route': 'login',
        'method': 'POST',
        'body': {
            'username': 'string',
            'password': 'string'
        }   
        }    ]
    return Response(routes)
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()  # fetch all products from DB
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    products = Product.objects.get(_id=pk)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)
    # product = None
    # for i in products:
    #     if i['_id'] == pk:
    #         product = i
    #         break
    # return Response(product)

@api_view(['GET'])
def getNecklaces(request):
    return Response(necklaces)

@api_view(['GET'])
def getNecklace(request, pk):
    print(necklaces[0])
    print(pk)
    necklace = None
    for i in necklaces:
        if i['_id'] == pk:
            necklace = i
            print(necklace)
            print(i)
            break
    return Response(necklace)