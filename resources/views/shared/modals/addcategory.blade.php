<div class="modal" id="addModal" tabindex="-1" role="dialog" aria-labelledby="Project Category">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header d-flex align-items-center">
				<h4 class="modal-title" id="exampleModalLabel1">Add New Category</h4>
				<button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
				</button>
			</div>
			<form data-parsley-validate class="form-horizontal" method="POST" action="{{ route('projects.saveCategories')}}" id="frmSave">{{ csrf_field() }}
				<div class="modal-body">
					<div id="add-messages"></div>
					<div class="form-group">
						<label for="recipient-name" class="control-label">Name:</label>
						<input type="text" class="form-control" id="name" name="name" required autofocus> <span class="text-danger" id="tname" style="color: red"></span>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<input type="submit" class="btn btn-primary mr-1" id="btnSave" value="Save Category" />
				</div>
			</form>
		</div>
	</div>
</div>