@extends('layouts.app')

@section('template_title')
    {{ $product->name ?? "{{ __('Show') Product" }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Product</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('products.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Name:</strong>
                            {{ $product->name }}
                        </div>
                        <div class="form-group">
                            <strong>Slug:</strong>
                            {{ $product->slug }}
                        </div>
                        <div class="form-group">
                            <strong>Description:</strong>
                            {{ $product->description }}
                        </div>
                        <div class="form-group">
                            <strong>Image Url:</strong>
                            {{ $product->image_url }}
                        </div>
                        <div class="form-group">
                            <strong>Price:</strong>
                            {{ $product->price }}
                        </div>
                        <div class="form-group">
                            <strong>Url:</strong>
                            {{ $product->url }}
                        </div>
                        <div class="form-group">
                            <strong>Featured:</strong>
                            {{ $product->featured }}
                        </div>
                        <div class="form-group">
                            <strong>Category Id:</strong>
                            {{ $product->category_id }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
