class PagesController < ApplicationController
  def home
    @persons = Person.all
    gon.persons = Person.all
  end
end
