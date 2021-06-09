<div class="modal " id="addModal" tabindex="-1" role="dialog" aria-labelledby="Project Category">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header d-flex align-items-center">
                    <h4 class="modal-title" id="exampleModalLabel1">Add New Subcategory</h4>
                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <form data-parsley-validate class="form-horizontal" method="POST" action="{{ route('projects.saveProject')}}" id="frmSave">
                    {{ csrf_field() }}
                    <div class="modal-body">
                        <div id="add-messages"></div>
                        <div class="form-group row">
                            <label for="recipient-name" class="control-label col-sm-3">Project category</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                                <select required  name="category" id="add-category" class="form-control">
                                    <option value="">Select Project Category</option>
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                    @endforeach
                                </select>
                                <span class="text-danger" id="tcat" style="color: red"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="recipient-name" class="control-label col-sm-3">Project Subcategory</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                                <select required  name="subcategory" id="add-subcategory" class="form-control">
                                    <option value="">Select Project Subcategory</option>
                                    @foreach($subcategories as $subcategory)
                                        <option value="{{ $subcategory->id }}">{{ $subcategory->name }}</option>
                                    @endforeach
                                </select>
                                <span class="text-danger" id="tsubcat" style="color: red"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="recipient-name" class="control-label col-sm-3">Name</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                            <input type="text" class="form-control" id="name" name="name" required autofocus>
                            <span class="text-danger" id="tname" style="color: red"></span>
                        </div>
                        </div>
                        <div class="form-group row">
                            <label for="code" class="control-label col-sm-3">Number</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="code" name="code" required autofocus>
                                <span class="text-danger" id="tcode" style="color: red"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="client" class="control-label col-sm-3">Client</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="client" name="client" required autofocus>
                                <span class="text-danger" id="tclient" style="color: red"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="objective" class="control-label col-sm-3">Objective</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                                <textarea  type="text" rows="2" class="form-control" id="objective" name="objective" required autofocus></textarea>
                                <span class="text-danger" id="tobj" style="color: red"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="cost" class="control-label col-sm-3">Cost</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                                <input type="number" class="form-control" id="cost" name="cost" required autofocus>
                                <span class="text-danger" id="tcost" style="color: red"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="size" class="control-label col-sm-3">Size</label>
                            <label class="col-sm-1 control-label">:</label>
                            <div class="col-sm-8">
                                <input type="number" class="form-control" id="size" name="size" required autofocus>
                                <span class="text-danger" id="tsize" style="color: red"></span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <input type="submit" class="btn btn-primary" id="btnSave" value="Save Project"/>
                    </div>
                </form>
            </div>
        </div>
    </div>