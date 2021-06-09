    <div class="modal" id="addModal" tabindex="-1" role="dialog" aria-labelledby="Project Category">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header d-flex align-items-center">
                    <h4 class="modal-title" id="exampleModalLabel1">Add New File</h4>
                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <form data-parsley-validate class="form-horizontal" method="POST" action="{{ route('projects.saveFile')}}" id="frmSave" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div class="modal-body">
                        <div id="add-messages"></div>
                        <div class="form-group">
                            <label for="project" class="control-label">Project:</label>
                            <select required  name="project" id="add-project" class="form-control">
                                <option value="">Select Project</option>
                                @foreach($projects as $project)
                                    <option value="{{ $project->id }}">{{ $project->name }}</option>
                                @endforeach
                            </select>
                            <span class="text-danger" id="tproject" style="color: red"></span>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="control-label">Project File:</label>
                            <input type="file" class="form-control" id="file" name="file" required accept=".docx,.pdf,.doc,">
                            <span class="text-danger" id="tfile" style="color: red"></span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <input type="submit" class="btn btn-primary" id="btnSave" value="Upload File"/>
                    </div>
                </form>
            </div>
        </div>
    </div>