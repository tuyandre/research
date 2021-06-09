<div class="modal" id="editModal" tabindex="-1" role="dialog" aria-labelledby="Project Category">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header d-flex align-items-center">
                    <h4 class="modal-title" id="exampleModalLabel1">Edit Project</h4>
                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <form  class="form-horizontal"  action="{{ route('projects.updateProject')}}" id="editForm">
                    {{ csrf_field() }}
                    <div class="modal-body">

                        <div id="edit-messages"></div>

                        <div class="modal-loading"
                             style="width:50px; margin:auto;padding-top:50px; padding-bottom:50px;">
                            <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                            <span class="sr-only">Loading...</span>

                        </div>

                        <div class="edit-result">
                            <div class="form-group row">
                                <label for="edit-category" class="control-label col-sm-3">Project category</label>
                                <label class="col-sm-1 control-label">:</label>
                                <div class="col-sm-8">
                                <select required  name="category" id="edit-category" class="form-control">
                                    <option value="">select Project Category</option>
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                    @endforeach
                                </select>
                                <span class="text-danger" id="ecat" style="color: red"></span>
                            </div>
                            </div>
                            <div class="form-group row">
                                <label for="edit-subcategory" class="control-label col-sm-3">Project Subcategory</label>
                                <label class="col-sm-1 control-label">:</label>
                                <div class="col-sm-8">
                                    <select required  name="subcategory" id="edit-subcategory" class="form-control">
                                        <option value="">Select Project Subcategory</option>
                                        @foreach($subcategories as $subcategory)
                                            <option value="{{ $subcategory->id }}">{{ $subcategory->name }}</option>
                                        @endforeach
                                    </select>
                                    <span class="text-danger" id="esubcat" style="color: red"></span>
                                </div>
                            </div>

                                <div class="form-group row">
                                    <label for="edit-name" class="control-label col-sm-3">Name</label>
                                    <label class="col-sm-1 control-label">:</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" id="edit-name" name="name" required autofocus>
                                        <span class="text-danger" id="ename" style="color: red"></span>
                                    </div>
                                </div>
                            <div class="form-group row">
                                <label for="edit-code" class="control-label col-sm-3">Number</label>
                                <label class="col-sm-1 control-label">:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="edit-code" name="code" required autofocus>
                                    <span class="text-danger" id="ecode" style="color: red"></span>
                                </div>
                            </div>
                                <div class="form-group row">
                                    <label for="edit-client" class="control-label col-sm-3">Client</label>
                                    <label class="col-sm-1 control-label">:</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" id="edit-client" name="client" required autofocus>
                                        <span class="text-danger" id="eclient" style="color: red"></span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="edit-objective" class="control-label col-sm-3">Objective</label>
                                    <label class="col-sm-1 control-label">:</label>
                                    <div class="col-sm-8">
                                        <textarea  type="text" rows="2" class="form-control" id="edit-objective" name="objective" required autofocus></textarea>
                                        <span class="text-danger" id="edobj" style="color: red"></span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="edit-cost" class="control-label col-sm-3">Cost</label>
                                    <label class="col-sm-1 control-label">:</label>
                                    <div class="col-sm-8">
                                        <input type="number" class="form-control" id="edit-cost" name="cost" required autofocus>
                                        <span class="text-danger" id="ecost" style="color: red"></span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="edit-size" class="control-label col-sm-3">Size</label>
                                    <label class="col-sm-1 control-label">:</label>
                                    <div class="col-sm-8">
                                        <input type="number" class="form-control" id="edit-size" name="size" required autofocus>
                                        <span class="text-danger" id="esize" style="color: red"></span>
                                    </div>
                                </div>
                        </div>
                        <div class="modal-footer editFooter">

                            <input type="hidden" name="id" id="id"/>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success" id="editBtn"
                                    data-loading-text="Loading...">
                                <i class="glyphicon glyphicon-ok-sign"></i>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>