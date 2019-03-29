class PagesController < ApplicationController
  def home
    @persons = Person.all
  end
end
