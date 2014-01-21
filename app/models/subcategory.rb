class Subcategory < ActiveRecord::Base
  attr_accessible :name, :category_id
  validates_presence_of :name, :category_id
  validates_uniqueness_of :name
  belongs_to :category
end
