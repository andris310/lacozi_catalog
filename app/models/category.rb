class Category < ActiveRecord::Base
  attr_accessible :name, :products

  validates_uniqueness_of :name
  validates_presence_of :name
  has_many :subcategories
  has_many :products

  def subcategories
  	binding.pry
  	Subcategoy.where(category_id: self.id)
  end
end
