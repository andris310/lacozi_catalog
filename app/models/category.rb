class Category < ActiveRecord::Base
  attr_accessible :name, :products

  validates_uniqueness_of :name
  validates_presence_of :name
  has_many :products
end
