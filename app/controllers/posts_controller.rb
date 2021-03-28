class PostsController < ApplicationController

  def index # indexアクションを定義した
    @posts = Post.all.order(id: "DESC")
  end

  # def new    
  # end

  def create
    # Post.create(content: params[:content])
    post = Post.create(content: params[:content], checked: false)
    # redirect_to action: :index
    render json:{ post: post}
    #render json:{ post: post }でJSON形式（データ）としてchecked.jsに返却
  end

  def checked
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
      #既読であれば「既読を解除するためにfalseへ変更」
    else
      post.update(checked: true)
      #既読でなければ「既読にするためtrueへ変更」
    end

    item = Post.find(params[:id])
    #更新したレコードをitem = Post.find(params[:id])で取得し直す
    render json: { post: item }
    #render json:{ post: item }でJSON形式（データ）としてchecked.jsに返却
  end

end
