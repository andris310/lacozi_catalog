
class ProductsController < ApplicationController
  # GET /products
  # GET /products.json

  def home

  end

  def index
    @products = Product.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @products }
    end
  end

  def decorative_pillows
    @pillows = Product.all
    # @pillows = []
    # Product.all.each do |prod|
    #   if prod.category.name.downcase.include? 'pillow'
    #     @pillows << prod
    #   end
    # end
    respond_to do |format|
      format.html
      format.json { render json: @pillows }
    end
  end


  def duvet_sets
    # @duvet_sets = Product.where(:category_id => 1)
    # @duvet_sets = Product.where(:category => 'duvet set')
    @duvet_sets = []
    Product.all.each do |prod|
      if prod.category.name == 'Duvet Cover Sets'
        @duvet_sets << prod
      end
    end

    respond_to do |format|
      format.html
      format.json { render json: @duvet_sets }
    end
  end

  def napkins
    @napkins = []
    Product.all.each do |prod|
      if prod.category.name == 'Napkins'
        @napkins << prod
      end
    end

    respond_to do |format|
      format.html
      format.json { render json: @napkins }
    end
  end

  def baby_blankets
    @baby_blankets = []
    Product.all.each do |prod|
      if prod.category.name == 'Baby Blankets'
        @baby_blankets << prod
      end
    end

    respond_to do |format|
      format.html
      format.json { render json: @baby_blankets }
    end
  end

  def details
    @details = Product.where(:id => params[:q])
    respond_to do |format|
      format.html
      format.json { render json: @details}
    end
  end

  # GET /products/1
  # GET /products/1.json
  def show
    @product = Product.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @product }
    end
  end

  # GET /products/new
  # GET /products/new.json
  def new
    @product = Product.new

    @options = Category.all.collect do |c|
        [c.name, c.id]
      end
    # @categories = Category.all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @product }
    end
  end

  # GET /products/1/edit
  def edit
    @product = Product.find(params[:id])

    @options = Category.all.collect do |c|
        [c.name, c.id]
      end
    # @categories = Category.all
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(params[:product])

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render json: @product, status: :created, location: @product }
      else
        format.html { render action: "new" }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /products/1
  # PUT /products/1.json
  def update
    @product = Product.find(params[:id])

    respond_to do |format|
      if @product.update_attributes(params[:product])
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    respond_to do |format|
      format.html { redirect_to products_url }
      format.json { head :no_content }
    end
  end
end
