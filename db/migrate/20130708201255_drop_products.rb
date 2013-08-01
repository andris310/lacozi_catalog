class DropProducts < ActiveRecord::Migration
  def up
  end

  def down
    drop_table :products
  end
end
