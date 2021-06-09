<div class="modal" id="addModal" tabindex="-1" role="dialog" aria-labelledby="Project Category">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header d-flex align-items-center">
                    <h4 class="modal-title" id="exampleModalLabel1">Add New Subcategory</h4>
                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <form data-parsley-validate class="form-horizontal" method="POST" action="{{ route('projects.saveSubcategories')}}" id="frmSave">
                    {{ csrf_field() }}
                    <div class="modal-body">
                        <div id="add-messages"></div>
                        <div class="form-group">
                            <label for="recipient-name" class="control-label">Project category:</label>
                            <select required  name="category" for="category"id="add-category" class="form-control">
                                <option value="">-select Project Category--</option>
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                @endforeach
                            </select>
                            <span class="text-danger" id="tcat" style="color: red"></span>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="control-label">Name:</label>
                            <input type="text" class="form-control" id="name" for="name" name="name" required autofocus>
                            <span class="text-danger" id="tname" style="color: red"></span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <input type="submit" class="btn btn-primary" id="btnSave" value="Save Category"/>
                    </div>
                </form>
            </div>
        </div>
    </div>